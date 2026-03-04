import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Calculadora() {

  const [display, setDisplay] = useState<string>("0");
  const [numeroAnterior, setNumeroAnterior] = useState<number | null>(null);
  const [operacao, setOperacao] = useState<string | null>(null);

  function adicionarNumero(num: string) {
    if (display === "0") {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  }

  function escolherOperacao(op: string) {
    setNumeroAnterior(parseFloat(display));
    setOperacao(op);
    setDisplay("0");
  }

  function calcular() {
    if (numeroAnterior === null || operacao === null) return;

    const atual = parseFloat(display);
    let resultado = 0;

    if (operacao === "+") resultado = numeroAnterior + atual;
    if (operacao === "-") resultado = numeroAnterior - atual;
    if (operacao === "*") resultado = numeroAnterior * atual;
    if (operacao === "/") resultado = numeroAnterior / atual;

    setDisplay(resultado.toString());
    setNumeroAnterior(null);
    setOperacao(null);
  }

  function limpar() {
    setDisplay("0");
    setNumeroAnterior(null);
    setOperacao(null);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.display}>{display}</Text>

      <View style={styles.linha}>
        <Botao texto="7" onPress={() => adicionarNumero("7")} />
        <Botao texto="8" onPress={() => adicionarNumero("8")} />
        <Botao texto="9" onPress={() => adicionarNumero("9")} />
        <Botao texto="/" onPress={() => escolherOperacao("/")} />
      </View>

      <View style={styles.linha}>
        <Botao texto="4" onPress={() => adicionarNumero("4")} />
        <Botao texto="5" onPress={() => adicionarNumero("5")} />
        <Botao texto="6" onPress={() => adicionarNumero("6")} />
        <Botao texto="*" onPress={() => escolherOperacao("*")} />
      </View>

      <View style={styles.linha}>
        <Botao texto="1" onPress={() => adicionarNumero("1")} />
        <Botao texto="2" onPress={() => adicionarNumero("2")} />
        <Botao texto="3" onPress={() => adicionarNumero("3")} />
        <Botao texto="-" onPress={() => escolherOperacao("-")} />
      </View>

      <View style={styles.linha}>
        <Botao texto="0" onPress={() => adicionarNumero("0")} />
        <Botao texto="C" onPress={limpar} />
        <Botao texto="=" onPress={calcular} />
        <Botao texto="+" onPress={() => escolherOperacao("+")} />
      </View>

    </View>
  );
}

function Botao({ texto, onPress }: any) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.texto}>{texto}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  display: {
    fontSize: 40,
    textAlign: "right",
    margin: 20,
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-around",
  },

  botao: {
    backgroundColor: "#ddd",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
  },

  texto: {
    fontSize: 24,
    fontWeight: "bold",
  }

});
