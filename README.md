# U-Mart storefront source

Includes the responsive storefront, larger desktop supporting text, search previews, favourites, store selector, basket drawer, and fixed bottom basket summary. All images, fonts and scripts are bundled locally. No API keys or AI services are required to run this project.

## Run with Streamlit
Install Python 3.11 or 3.12. Extract this ZIP, open a terminal inside this folder, and run:

```sh
python -m pip install -r requirements.txt
python -m streamlit run app.py
```

Open the localhost address printed in your terminal. On Windows, you can also double-click RUN_STREAMLIT.bat. This wrapper embeds the original JavaScript storefront; products and basket work inside a full-height scrolling frame. Browser privacy settings can prevent basket persistence, but shopping still works for the current session.

For Streamlit hosting, upload this folder to your own repository and set app.py as the entry point. Keep the web folder, bundle.py, requirements.txt and .streamlit folder alongside it. Your local localhost URL cannot be accessed by a client on another computer.

## Use as a regular website
The web folder is the complete portable HTML/CSS/JavaScript website. Upload its CONTENTS to any static hosting service, or preview locally:

```sh
python -m http.server 8000 --directory web
```

Open http://localhost:8000. Edit web/index.html for copy, web/styles.css for design and web/app.js for product data and behaviour. This is the easiest option for a full-screen client website.

## Android APK
The android folder contains an Android Studio WebView project. It loads the bundled website locally using AndroidX WebViewAssetLoader; it does not depend on the public prototype URL. External links open in another installed app.

Build prerequisites: Android Studio supporting Android Gradle Plugin 8.7.3, JDK 17, Android SDK 35 and Gradle 8.9. This export does not include a Gradle wrapper binary. Install Gradle 8.9 and run `gradle wrapper --gradle-version 8.9` inside android first, then open android in Android Studio, sync, and use Build > Build App Bundle(s) / APK(s) > Build APK(s). Alternatively run `gradle :app:assembleDebug` there. Internet is required to download build dependencies the first time.

The debug APK will be at android/app/build/outputs/apk/debug/app-debug.apk. For a production release, use Android Studio's signed APK workflow with your own signing key. This source project has not been compiled or device-tested in the export environment. No compiled APK is included.

After changing web files, copy them into android/app/src/main/assets/www before rebuilding the Android app.

## Demo scope
Products, prices and checkout are illustrative. No real payment is collected or order sent. Basket and favourites are saved in local browser storage, not a customer database. A live store needs approved inventory, order management and a real payment integration. The demo labels accurately describe this scope.

Brand assets belong to their respective owners. Confirm permission with U-Mart before a commercial launch. Font family: Manrope, distributed under the SIL Open Font License (https://fonts.google.com/specimen/Manrope/license).

Implementation references: https://docs.streamlit.io/1.42.0/develop/api-reference/custom-components/st.components.v1.html and https://developer.android.com/develop/ui/views/layout/webapps/load-local-content
