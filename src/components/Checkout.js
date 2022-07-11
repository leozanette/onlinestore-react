import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="full-name">
          Nome Completo:
          <input
            type="text"
            id="full-name"
            data-testid="checkout-fullname"
          />
        </label>
        <label htmlFor="email">
          E-mail
          <input
            type="email"
            id="email"
            data-testid="checkout-email"
          />
        </label>
        <label htmlFor="cpf">
          CPF:
          <input
            type="text"
            id="cpf"
            data-testid="checkout-cpf"
          />
        </label>
        <label htmlFor="phone">
          Telefone:
          <input
            type="text"
            id="phone"
            data-testid="checkout-phone"
          />
        </label>
        <label htmlFor="cep">
          CEP:
          <input
            type="text"
            id="cep"
            data-testid="checkout-cep"
          />
          <label htmlFor="checkout-address">
            Endereço:
            <input
              type="text"
              id="checkout-address"
              data-testid="checkout-address"
            />
          </label>
        </label>
        <button type="submit">Concluir</button>
        {/* botão não tem função */}
      </form>
    );
  }
}
export default Checkout;
