# PWA Deployments

This README contains instructions on how to deploy the PWA to various platforms.

## Important Links

### Google Play Store

- [Google Play Console Account](https://developer.android.com/distribute/console)
- [BubbleWrap CLI](https://www.npmjs.com/package/@bubblewrap/cli)

### Microsoft Store

- [Microsoft Store Account](https://developer.microsoft.com/en-us/microsoft-store/register/)
- [PWA Builder](https://www.pwabuilder.com/)

## Tutorial

- Refer to the [Google Documentation](https://developers.google.com/codelabs/pwa-in-play#0) for the full explanation.

## Steps to generate & deploy

### For Google Play Store

1. BubbleWrap is already installed in the project with the package name `@bubblewrap/cli`.
2. Run `cd pwa/playstore`
3. Run `bubblewrap init --manifest=https://acmx.vercel.app/manifest.webmanifest`
4. Consult with the project lead for the keystore and key password.
5. **KEYSTORE AND KEYSTORE PASSWORD MUST BE THE SAME**
6. Run `bubblewrap build`

### For Microsoft Store

1. Visit PWA Builder and input the URL of the PWA: <https://acmx.vercel.app>
2. Download the generated package and unzip it on `pwa/microsoft`
3. Visit the [Microsoft Store Dashboard](https://play.google.com/console/u/0/developers)
4. Update the package with the generated package from PWA Builder.
5. Submit the package for review.

## LOST/FORGOT KEYSTORE PASSWORD

1. Use New & Generated BubbleWrap project
2. Run `keytool -export -rfc -keystore <android.keystore> -alias <android> -file upload_certificate.pem`
3. Replace &lt;variables&gt; with the correct values.
4. In Google Play Console, go to Release > Setup > App Integrity
5. Select 'Request upload key reset' and upload the generated pem file.
6. An email will be sent w/ the date when the new key will be available.
