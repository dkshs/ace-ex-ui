import { render, screen } from "@testing-library/react";

import { Tabs } from "./Tabs";

describe("Tabs component", () => {
  it("should render the Tabs", () => {
    render(
      <Tabs.Root defaultValue="conta">
        <Tabs.List>
          <Tabs.Trigger value="conta">Conta</Tabs.Trigger>
          <Tabs.Trigger value="senha">Senha</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="conta">
          Faça alterações em sua conta aqui. Clique em salvar quando terminar.
        </Tabs.Content>
        <Tabs.Content value="senha">
          Altere sua senha aqui. Depois de salvar, você será desconectado.
        </Tabs.Content>
      </Tabs.Root>,
    );

    expect(
      screen.getByText(
        "Faça alterações em sua conta aqui. Clique em salvar quando terminar.",
      ),
    ).toBeInTheDocument();
  });

  it("should render the Tabs in tab 'senha'", async () => {
    render(
      <Tabs.Root defaultValue="senha">
        <Tabs.List>
          <Tabs.Trigger value="conta">Conta</Tabs.Trigger>
          <Tabs.Trigger value="senha">Senha</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="conta">
          Faça alterações em sua conta aqui. Clique em salvar quando terminar.
        </Tabs.Content>
        <Tabs.Content value="senha">
          Altere sua senha aqui. Depois de salvar, você será desconectado.
        </Tabs.Content>
      </Tabs.Root>,
    );

    expect(
      screen.getByText(
        "Altere sua senha aqui. Depois de salvar, você será desconectado.",
      ),
    ).toBeInTheDocument();
  });
});
