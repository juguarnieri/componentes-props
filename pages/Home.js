import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card
          image="https://static.vecteezy.com/ti/vetor-gratis/p1/17762049-mulher-atraente-fechando-os-olhos-toca-flor-gigante-apreciando-a-beleza-natural-e-o-cheiro-agradavel-menina-perto-de-flor-simboliza-o-uso-de-cosmeticos-sem-adicao-de-quimica-ilustracaoial-plana-vetor.jpg"
          title="Beleza Natural"
          description="Aprecie a beleza da natureza e respire ar puro!"
        />
        <Card
          image="https://blog.brq.com/wp-content/uploads/sites/3/2022/11/inovacao.jpeg"
          title="Inovação"
          description="A tecnologia está transformando o mundo!"
        />
        <Card
          image="https://media.istockphoto.com/id/1369171053/pt/foto/group-of-sporty-people-walks-in-mountains-at-sunset-with-backpacks.jpg?s=612x612&w=0&k=20&c=ODX_ITFs13qSeKgkB8AbxYHb3O4AMZVZEu9XLq3TMCQ="
          title="Aventuras"
          description="Explore novos lugares e viva experiências incríveis!"
        />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  scrollContent: {
    flexGrow: 1, // Faz os elementos preencherem o espaço disponível
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
