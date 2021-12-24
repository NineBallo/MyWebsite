import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link
                        rel="preload"
                        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                        as="font"
                        crossOrigin=""
                    />
                    <link rel="icon" href="/Assets/Site/logoTS.png"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument