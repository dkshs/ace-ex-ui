import { render, screen } from "@testing-library/react";

import { Tabs, TabProps } from "./Tabs";

const tabs: TabProps[] = [
  {
    content:
      "Faça alterações em sua conta aqui. Clique em salvar quando terminar.",
    title: "Conta",
    value: "conta",
  },
  {
    content: "Altere sua senha aqui. Depois de salvar, você será desconectado.",
    title: "Senha",
    value: "senha",
  },
];

describe("Tabs Complete component", () => {
  it("should render the complete Tabs", () => {
    render(<Tabs.Complete tabs={tabs} defaultValue="conta" />);

    expect(
      screen.getByText(
        "Faça alterações em sua conta aqui. Clique em salvar quando terminar.",
      ),
    ).toBeInTheDocument();
  });

  it("should render the complete Tabs in tab 'senha'", async () => {
    render(<Tabs.Complete tabs={tabs} defaultValue="senha" />);

    expect(
      screen.getByText(
        "Altere sua senha aqui. Depois de salvar, você será desconectado.",
      ),
    ).toBeInTheDocument();
  });
});
