function Toast({ message }) {
  if (!message) return null;

  return (
    <div
      className="position-fixed bottom-0 end-0 p-3"
      style={{ zIndex: 9999 }}
    >
      <div className="alert alert-success shadow">
        {message}
      </div>
    </div>
  );
}

export default Toast;