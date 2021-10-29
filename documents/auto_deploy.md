# Vercelに自動でデプロイする
masterブランチにpushまたはmergeされた場合、GitHubActionsを使ってVercel経由でdeployできるようにしたい。

## Vercel デプロイ時に必要となるトークンを取得する
Vercelのサイトにログインし、Tokenを発行。どこかに控えておく。

## プロジェクトファイルのrootでvercelコマンドを実行する
まずは以下のコマンドでvercelのcliをgloal installする。
```bash
$ npm i -g vercel
```
次にプロジェクトのrootで `$ vercel` コマンドを実行すると root 階層に .vercel ディレクトリができる。この中の `project.json` にはGitHubActionsで使用する `vercel-project-id` と `vercel-org-id` が入っている。これを GitHub の Secret に登録しておく。

## 参考
- [Vercel の定期デプロイを GitHub Actions で実現する](https://zenn.dev/nikaera/articles/vercel-github-actions)
