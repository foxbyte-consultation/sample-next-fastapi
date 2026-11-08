# 案件の結び

キーが空の連携は、その段では飛ばす。

- tasks.sink: 
- notion.tasks: 
- notion.decisions:
- github.review_workflow: 
- github.pr_template: .github/PULL_REQUEST_TEMPLATE.md
- repos.paired: 
- test.command: 
- rules.entry: .cursor/rules/

## Notion MCP

全段から使ってよい。次を超えない。

- 共通タスクDBは、案件リレーションで絞る。全件は取らない。接続先が空の間は、一覧も本文も、書き込みもしない。
- 一覧で取るのはタイトルとステータスだけである。
- 本文を開くのは、その段の対象1件だけである。
- 書くのは、その段のクッションが許した差分だけである。設計書の全文、レビュー指摘の一覧、実装の経過は書かない。
- 1段の中で、同じ取得を繰り返さない。
- 応答の JSON は会話に出さない。
- 接続済みの Notion MCP を使う。`notion.key` の中身は会話に出さず、接続があるときは読み直さない。
