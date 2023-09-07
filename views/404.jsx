function SeccionFlexCentrada({ children }) {
  return (
    <div className="SeccionFlexCentrada alto100vh">
      {children}
    </div>
  );
}

ReactDOM.createRoot(document.querySelector(".App")).render(
  <SeccionFlexCentrada>
    404 Error :(
  </SeccionFlexCentrada>
);