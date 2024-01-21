# Known Bugs

If you run this using `yarn run devx` which runs next with turbopack, the generator will throw the error `Invalid distance too far back`.

To fix this, run `yarn run dev` which runs next without turbopack or run `yarn run build` and then `yarn run start` which runs the production build.
