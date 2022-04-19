// debug
import { useTheme } from '@components/NextTheme'
import Link from 'next/link'
import { SetStateAction, memo, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  Button,
  InteractiveContainer,
  Paragraph,
  Theme,
  ThemeName,
  XStack,
  YStack,
  debounce,
  useDebounceValue,
} from 'tamagui'

import { useGet } from '../hooks/useGet'
import { ActiveCircle } from './ActiveCircle'
import { useTint } from './ColorToggleButton'
import { ContainerLarge } from './Container'
import { HomeH2, HomeH3 } from './HomeH2'
import { MediaPlayer } from './MediaPlayer'
import { useOnIntersecting } from './useOnIntersecting'

const themes: (ThemeName | null)[][] = [
  ['orange', 'red', 'pink', null, 'green', 'teal', 'blue'],
  [null, 'alt1', 'alt2', 'alt3'],
]

const themeCombos: string[] = []
for (let i = 0; i < themes[0].length; i++) {
  for (let j = 0; j < themes[1].length; j++) {
    const parts = [themes[0][i], themes[1][j]].filter(Boolean)
    themeCombos.push(parts.join('_'))
  }
}

const flatToSplit = (i: number) => {
  const colorI = Math.floor(i / 4)
  const shadeI = i % 4
  return [colorI, shadeI]
}

const splitToFlat = ([a, b]: number[]) => {
  return a * 4 + b
}

let hasScrolledOnce = false

export function HeroExampleThemes() {
  const { setTheme, theme: userTheme } = useTheme()
  const [activeI, setActiveI] = useState([0, 0])
  const [curColorI, curShadeI] = activeI
  const [theme, setSelTheme] = useState('')
  const nextIndex = splitToFlat(activeI)
  const curIndex = useDebounceValue(nextIndex, 300)
  // const isTransitioning = curIndex !== nextIndex
  // const isMidTransition = useDebounceValue(isTransitioning, 150)
  // const altName = themes[1][curShadeI]
  const colorName = themes[0][curColorI]
  const scrollView = useRef<HTMLElement | null>(null)
  const [scrollLock, setScrollLock] = useState<null | 'shouldAnimate' | 'animate' | 'scroll'>(null)
  const getLock = useGet(scrollLock)

  const updateActiveI = (to: SetStateAction<number[]>) => {
    setScrollLock('shouldAnimate')
    setActiveI(to)
  }

  const move = (dir = 0) => {
    updateActiveI((prev) => {
      const next = Math.min(Math.max(0, splitToFlat(prev) + dir), themeCombos.length - 1)
      const nextSplit = flatToSplit(next)
      return nextSplit
    })
  }

  const moveToIndex = (index: number) => {
    updateActiveI(flatToSplit(index))
  }

  const width = 180
  const scale = 0.6

  function scrollToIndex(index: number, force = false) {
    const node = scrollView.current
    const lock = getLock()
    const isReadyToAnimate = lock === 'shouldAnimate'
    const isForced = force && (isReadyToAnimate || lock === null)
    const shouldPrevent = !isReadyToAnimate && !isForced
    if (!node || shouldPrevent) return
    const left = (width + 30) * index + width / 2 + 30
    if (node.scrollLeft === left) return
    node.scrollTo({ left, top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    if (scrollLock !== 'shouldAnimate') return
    scrollToIndex(nextIndex)
  }, [nextIndex, scrollLock, scrollView.current])

  if (typeof document !== 'undefined') {
    // scroll lock unset
    useLayoutEffect(() => {
      const node = scrollView.current
      if (!node) return
      const listener = debounce(() => {
        setScrollLock(null)
      }, 200)
      node.addEventListener('scroll', listener, { passive: true })
      return () => {
        node.removeEventListener('scroll', listener)
      }
    }, [])
  }

  // arrow keys
  useOnIntersecting(scrollView, ({ isIntersecting, dispose }) => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        move(1)
      }
      if (e.key === 'ArrowLeft') {
        move(-1)
      }
    }
    if (isIntersecting) {
      if (!hasScrolledOnce) {
        // scroll to middle on first intersection
        hasScrolledOnce = true
        // dont rush
        setTimeout(() => {
          const index = themeCombos.indexOf('')
          moveToIndex(index)
          setScrollLock('shouldAnimate')
          scrollToIndex(index, true)
        }, 400)
      }
      window.addEventListener('keydown', onKey)
      return () => {
        window.removeEventListener('keydown', onKey)
      }
    } else {
      dispose?.()
    }
  })

  useEffect(() => {
    setSelTheme(userTheme as any)
  }, [userTheme])

  return (
    <YStack>
      {/* <TintBg colorName={colorName} /> */}
      {useMemo(() => {
        return (
          <ContainerLarge position="relative" space="$2">
            <HomeH2>
              <span className="rainbow clip-text">Powerful</span> themes
            </HomeH2>
            <HomeH3>Unlimited nested alternate/component themes.</HomeH3>
          </ContainerLarge>
        )
      }, [])}

      <YStack mt="$4" ai="center" jc="center" space="$2">
        <XStack className="scroll-horizontal no-scrollbar">
          <XStack px="$4" space="$4">
            <InteractiveContainer bc="$background" p="$1" br="$10" als="center" space="$1">
              {['light', 'dark'].map((name, i) => {
                const selected = i === 0 ? 'light' : 'dark'
                const isActive = theme === selected
                return (
                  <Theme key={name} name={selected}>
                    <ActiveCircle onPress={() => setTheme(selected)} isActive={isActive} />
                  </Theme>
                )
              })}
            </InteractiveContainer>

            <InteractiveContainer bc="$background" p="$1" br="$10" als="center" space="$1">
              {themes[0].map((color, i) => {
                const isActive = curColorI === i
                return (
                  <Theme key={color} name={color}>
                    <ActiveCircle
                      onPress={() => updateActiveI([i, curShadeI])}
                      isActive={isActive}
                      backgroundColor="$colorMid"
                    />
                  </Theme>
                )
              })}
            </InteractiveContainer>

            <InteractiveContainer bc="$background" p="$1" br="$10" als="center">
              <Theme name={colorName}>
                <XStack space="$1">
                  {themes[1].map((name, i) => {
                    const isActive = curShadeI === i
                    return (
                      <ActiveCircle
                        onPress={() => updateActiveI([curColorI, i])}
                        key={i}
                        isActive={isActive}
                        opacity={1.2 - (4 - i) / 4}
                        backgroundColor="$colorHover"
                      />
                    )
                  })}
                </XStack>
              </Theme>
            </InteractiveContainer>
          </XStack>
        </XStack>

        <YStack
          mt={-20}
          py="$8"
          ov="hidden"
          w="100%"
          pos="relative"
          pointerEvents={scrollLock === 'animate' ? 'none' : 'auto'}
        >
          <XStack
            className="scroll-horizontal no-scrollbar"
            ref={scrollView}
            onScroll={(e: any) => {
              if (scrollLock === 'animate' || scrollLock === 'shouldAnimate') {
                return
              }
              const scrollX = Math.max(0, e.target.scrollLeft)
              const itemI = Math.min(Math.floor(scrollX / (width + 30)), themeCombos.length - 1)
              const [n1, n2] = flatToSplit(itemI)
              const [c1, c2] = activeI
              if (n1 !== c1 || n2 !== c2) {
                setScrollLock('scroll')
                setActiveI([n1, n2])
              }
            }}
          >
            <XStack
              ai="center"
              jc="center"
              space="$6"
              pos="relative"
              px={`calc(50vw + 30px)`}
              x={-45 - 30}
            >
              {useMemo(() => {
                return themeCombos.map((name, i) => {
                  // const isCurActive = curIndex === i
                  // const isNextActive = nextIndex === i
                  // const isActive = isMidTransition ? isNextActive : isCurActive
                  // const isBeforeActive = i < curIndex
                  // const isActiveGroup = colorI === curColorI
                  const [colorI, shadeI] = flatToSplit(i)
                  const [color, alt] = name.split('_')
                  return (
                    <XStack key={i} width={width}>
                      <XStack
                        // zi={(isActive ? 1000 : isBeforeActive ? i : 1000 - i) + (isActiveGroup ? 1000 : 0)}
                        // pos="absolute"
                        // x={
                        //   i * offset + 0 // (isActiveGroup ? (isBeforeActive ? -1 : 0) * 20 * i : 0)
                        //   // (!isTransitioning && isActiveGroup ? offsetActive * shadeI : 0)
                        // }
                        // scale={isTransitioning ? 0.6 : 1 + (isActiveGroup ? -0.1 : -0.5) + (isActive ? 0.1 : 0)}
                        // mx={-scale * 180}
                        scale={scale}
                        cursor="pointer"
                        opacity={0.5}
                        hoverStyle={{
                          scale: scale + 0.025,
                        }}
                        onPress={() => {
                          updateActiveI([colorI, shadeI])
                        }}
                      >
                        <Theme name={color as any}>
                          <MediaPlayer
                            pointerEvents="none"
                            alt={alt ? +alt.replace('alt', '') : 0}
                          />
                        </Theme>
                      </XStack>
                    </XStack>
                  )
                })
              }, [])}
            </XStack>
          </XStack>

          <YStack pe="none" fullscreen ai="center" jc="center" $xs={{ scale: 0.7 }}>
            <Theme name={colorName}>
              <MediaPlayer pointerEvents="none" pointerEventsControls="auto" alt={curShadeI} />
            </Theme>
          </YStack>
        </YStack>

        {/* <Theme name={colorName}>
          <CodeInline my="$2" br="$3" size="$5">
          causing ssr issues
          {theme}
          {colorName ? `_${colorName}` : ''}
          {altName ? `_${altName}` : ''}
          {hoverSectionName ? `_${hoverSectionName}` : ''}
          </CodeInline>
        </Theme> */}
      </YStack>

      <Bottom />
    </YStack>
  )
}

const Bottom = memo(() => {
  const { tint } = useTint()

  return (
    <ContainerLarge position="relative">
      <YStack ai="center" als="center" jc="center" maw={580} space="$4">
        <Paragraph theme="alt2" ta="center" size="$6">
          Tamagui themes are fully typed based on your custom tokens, compiling into clean atomic
          CSS that avoids deep re-renders.
        </Paragraph>
        <XStack>
          <Link href="/docs/intro/themes" passHref>
            <Button theme={tint} tag="a" fontFamily="$silkscreen">
              How themes work &raquo;
            </Button>
          </Link>
        </XStack>
      </YStack>
    </ContainerLarge>
  )
})

const TintBg = ({ colorName }) => {
  return <YStack fullscreen bc={`$${colorName}9`} o={0.05} className="mask-gradient-down" />
}