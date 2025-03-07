# Todo アプリケーション

このプロジェクトは、LaravelとInertia.js（React）を使用したシンプルなTodoアプリケーションです。

## 機能

- ユーザー認証（登録・ログイン）
- Todoの作成・閲覧・更新・削除（CRUD）
- ユーザーごとのTodo管理

## 必要要件

- PHP 8.2以上
- MySQL 5.7以上
- Node.js 16以上
- Composer

## インストール手順

1. リポジトリのクローン
```bash
git clone [リポジトリのURL]
cd [プロジェクト名]
```

2. 依存パッケージのインストール
```bash
composer install
npm install
```

3. 環境設定
```bash
cp .env.example .env
php artisan key:generate
```

4. データベースの設定
- .envファイルでデータベース設定を編集
```bash
DB_DATABASE=todo
DB_USERNAME=root
DB_PASSWORD=
```

5. データベースのマイグレーション
```bash
php artisan migrate
```

6. アプリケーションの起動
```bash
php artisan serve
npm run dev
```

## 使用技術

- Laravel 12.1.1
- Inertia.js
- React
- MySQL
- Tailwind CSS

## ライセンス

[MIT License](LICENSE)
