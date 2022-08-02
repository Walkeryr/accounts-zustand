import { useState } from 'react';
import ReactDOM from 'react-dom';
import Head from 'next/head';

import useAccountStore from '../hooks/useAccountStore';
import AccountItem from './AccountItem';
import AccountForm from './AccountForm';

export default function Home() {
  const accounts = useAccountStore((state) => state.accounts);
  const addAccount = useAccountStore((state) => state.addAccount);

  const [showModal, changeShowModal] = useState(false);

  return (
    <div>
      <Head>
        <title>Test accounts management</title>
      </Head>

      <main>
        <div className="header">Accounts</div>

        {!accounts.length && <div>No accounts created yet</div>}

        {accounts.map(() => (
          <AccountItem />
        ))}

        <button className="addButton" onClick={() => changeShowModal(true)}>
          Add account
        </button>
      </main>

      {showModal &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="modal-inner">
              <AccountForm />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
