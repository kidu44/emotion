// import aphrodite from './src/aphrodite'
// import cssModules from './src/css-modules'
import emotion from './src/emotion'
import emotionCSS from './src/emotion-css'
import emotionObjStyle from './src/emotion-obj-style'
import glamor from './src/glamor'
import glamorous from './src/glamorous'
// import jss from './src/jss'
// import radium from './src/radium'
// import reactNative from './src/react-native'
// import reactNativeStyleSheet from './src/react-native-stylesheet'
import styledComponents from './src/styled-components'
// import styledComponentsPrimitives from './src/styled-components-primitives'
// import styletron from './src/styletron'
// import xp from './src/reactxp'

import renderDeepTree from './tests/renderDeepTree'
// import renderTweet from './tests/renderTweet'
import renderWideTree from './tests/renderWideTree'

const testAll = window.location.search === '?all'
const testFastest = window.location.search === '?fastest'

const coreTests = [
  // () => renderTweet('emotion', emotion),
  () => renderDeepTree('emotion', emotion),
  () => renderWideTree('emotion', emotion),
  () => renderDeepTree('emotionCSS', emotionCSS),
  () => renderWideTree('emotionCSS', emotionCSS),
  () => renderDeepTree('emotionObjStyle', emotionObjStyle),
  () => renderWideTree('emotionObjStyle', emotionObjStyle),
  // () => renderTweet('react-native-web', reactNative),
  // () => renderDeepTree('css-modules', cssModules),
  // () => renderWideTree('css-modules', cssModules),
  // () => renderTweet('react-native-web/stylesheet', reactNativeStyleSheet),
  // () => renderDeepTree('react-native-web/stylesheet', reactNativeStyleSheet),
  // () => renderWideTree('react-native-web/stylesheet', reactNativeStyleSheet),
  // () => renderDeepTree('react-native-web', reactNative),
  // () => renderWideTree('react-native-web', reactNative)
  // () => renderTweet('glamor', glamor),
  () => renderDeepTree('glamor', glamor),
  () => renderWideTree('glamor', glamor),
  // () => renderTweet('glamorous', glamorous),
  () => renderDeepTree('glamorous', glamorous),
  () => renderWideTree('glamorous', glamorous),

  // () => renderTweet('styled-components', styledComponents),
  () => renderDeepTree('styled-components', styledComponents),
  () => renderWideTree('styled-components', styledComponents)
]

const fastestTests = [
  // () => renderDeepTree('styletron', styletron),
  // () => renderWideTree('styletron', styletron),
  // () => renderDeepTree('aphrodite', aphrodite),
  // () => renderWideTree('aphrodite', aphrodite)
]

/**
 * Optionally run tests using other libraries
 */
const restTests = [
  // () => renderDeepTree('glamor', glamor),
  // () => renderWideTree('glamor', glamor),
  // () => renderDeepTree('react-jss', jss),
  // () => renderWideTree('react-jss', jss),
  // () => renderDeepTree('radium', radium),
  // () => renderWideTree('radium', radium),
  // () => renderDeepTree('reactxp', xp),
  // () => renderWideTree('reactxp', xp),
  // () => renderDeepTree('styled-components', styledComponents),
  // () => renderWideTree('styled-components', styledComponents),
  // () =>
  //   renderDeepTree('styled-components/primitives', styledComponentsPrimitives),
  // () =>
  //   renderWideTree('styled-components/primitives', styledComponentsPrimitives)
]

const tests = [...coreTests]
if (testFastest) {
  tests.push(...fastestTests)
}
if (testAll) {
  tests.push(...fastestTests)
  tests.push(...restTests)
}

// run benchmarks
tests.reduce((promise, test) => promise.then(test()), Promise.resolve())
