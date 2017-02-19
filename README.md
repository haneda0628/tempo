2017/2/19 00003
* signup追加

[問題解決の方法]
Delete your node_modules folder then run npm install to reinstall all modules. 
This will ensure all node modules are clean.

Also delete the contents of your www folder and then run ionic serve to regenerate the files. 
This will ensure your project build is clean.

If that doesn't work, try updating your ionic-cli to the latest version by running npm install -g ionic@2.1.0 then try the above again.

2017/2/12 00002
* 連携ページ作成完了

2017/2/12 00001
* スタートページ作成（簡易レイアウト）
