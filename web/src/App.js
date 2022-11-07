function App() {

  const codigo = 1;
  const nome = "Décio";
  const sobrenome = "Pinto";
  const ativo = true;

  return (
    <div>
      <h1>App</h1>
      <p><b>Código:</b> {codigo}</p>
      <p><b>Nome:</b> {nome}</p>
      <p><b>Sobrenome:</b> {sobrenome}</p>
      <p><b>Ativo:</b> {ativo.toString()}</p>
    </div>
  );
}

export default App;
