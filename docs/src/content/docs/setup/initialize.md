---
title: Astroプロジェクトの作成
description: Astroプロジェクトの作成方法を解説します。
---

## プロジェクトの作成

次のコマンドでastroプロジェクトを作成します。

```
$ pnpm create astro@latest
```

### プロジェクト名

プロジェクト名を何にするか聞かれます。
ここでは`start-astro`にしておきます。

```
   dir   Where should we create your new project?
         ./start-astro
```

### テンプレート

プロジェクトのテンプレートを選択します。

```
  tmpl   How would you like to start your new project?
         ● A basic, helpful starter project (recommended)
         ○ Use blog template 
         ○ Use docs (Starlight) template 
         ○ Use minimal (empty) template 
```

4つのテンプレートはそれぞれ次のような用途に追加います。

| テンプレート | 説明 |
| :--- | :--- |
| basic            | 標準的なWebサイトの作成 |
| blog             | ブログサイトの作成 |
| docs (Starlight) | ドキュメントサイトの作成 |
| minimal          | 空のプロジェクトの作成 |

### 依存関係

依存関係のインストールするか聞かれます。

```
  deps   Install dependencies? (recommended)
         ● Yes  ○ No 
```

### gitリポジトリ

gitリポジトリの作成をするか聞かれます。

```
   git   Initialize a new git repository? (optional)
         ● Yes  ○ No 
```
