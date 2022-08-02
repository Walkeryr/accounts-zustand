export default function AccountForm() {
  return (
    <form className="form" action="">
      <div className="header">Add new account</div>

      <label htmlFor="account-email">Email:</label>
      <input type="email" id="account-email" />
    </form>
  );
}
