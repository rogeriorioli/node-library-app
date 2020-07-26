import App from 'next/app'
import 'bootstrap/dist/css/bootstrap.css'
import '../style/style.css'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
        <Component {...pageProps} />
    )
  }
}
