# Deploy AIRLab Hassen to GitHub Pages

## 1. Confirm the intended production URL

The supplied site targets:

```text
https://AIRLabHassen.github.io/
```

The central site origin is defined once in `_config.yml`:

```yaml
url: "https://airlabhassen.github.io"
```

For that root GitHub Pages URL, use a GitHub user or organization named `AIRLabHassen` and a repository named exactly `AIRLabHassen.github.io`.

## 2. Upload the repository contents

Upload the contents of this project folder to the repository root. Do not put the files inside an additional nested folder.

The root should include:

```text
_config.yml
_layouts/
_includes/
_data/
assets/
index.html
members.html
research.html
publications.html
resources.html
.github/workflows/deploy-pages.yml
```

## 3. Commit to `main`

The deployment workflow runs on each push to the `main` branch.

## 4. Enable GitHub Actions deployment

1. Open the repository on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab and confirm that **Deploy Jekyll site to GitHub Pages** completes successfully.

The workflow builds the Jekyll source, expands the shared layout and includes, uploads the generated artifact, and deploys it to GitHub Pages.

## 5. Verify the published site

Check the following pages after deployment:

```text
/
/members.html
/resources.html
/research.html
/publications.html
```

Confirm that:

- the Members link appears in the shared header and footer;
- the active page is marked correctly in the navigation;
- the Bambu Lab H2D and table CNC images load from `/assets/img/`;
- the mobile navigation opens and closes;
- the shared sidebar and footer appear on every page.

## 6. Enforce HTTPS

Enable **Enforce HTTPS** in **Settings → Pages** when the option is available.

## 7. Updating shared content later

Use the central data files rather than editing every page:

- navigation: `_data/navigation.yml`
- sidebar profile: `_data/profile.yml`
- PI and member profiles: `_data/members.yml`
- equipment cards: `_data/lab_resources.yml`

Use only one GitHub Pages publishing method at a time. This package includes an explicit GitHub Actions workflow, so **GitHub Actions** should be selected as the Pages source.
