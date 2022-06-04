import logo from './logo.svg';
import './App.css';

// Amplifyのインポート
import { Amplify } from "aws-amplify"
// withAuthenticatorのインポート
import { withAuthenticator } from "@aws-amplify/ui-react"
// CSSを自動付加するためのインポート
import "@aws-amplify/ui-react/styles.css"

// aws-exportsのインポート
import awsExports from "./aws-exports"
// お約束の定型文
Amplify.configure(awsExports);


// プロップスの形で受け取る
function App({ signOut, user }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Hello React app with AWS</h2>
        {// 三項演算子でユーザーが存在する場合としない場合の条件式を記載
        user ? (
        <>
          <h3>私は権限を持っています:{user.username}</h3>
          <button onClick={signOut}>サインアウト</button>
        </>
        )
        :
        (
        <>
          <h3>権限がありません</h3>
        </>
        ) 
        }
      </header>
    </div>
  );
}

// withAuthenticatorでAppをラップする必要がある
export default withAuthenticator(App);
