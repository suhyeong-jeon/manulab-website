# Publishing the website

Source repository: https://github.com/suhyeong-jeon/manulab-website

Website: https://suhyeong-jeon.github.io/manulab-website/

GitHub Pages publishes the `docs/` directory on the `main` branch.

After editing a page, run these commands in this project directory:

```powershell
quarto render
git add .
git commit -m "Update website"
git push
```

The build must complete successfully before committing. Keep `docs/.nojekyll` in the repository.
