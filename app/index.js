import ReactPages from '../vendor/react-pages'

ReactPages.registerWithWebpackContext(require.context("./views", true, /^\.\/.*\.jsx$/))
ReactPages.start()
