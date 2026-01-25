import Button from '../Button'
import {
  ButtonContainer,
  ConfirmationMessage,
  Title
} from '../Cart/styles'

type Props = {
  orderId: string
  onConfirm: () => void
}

const Confirmation = ({ orderId, onConfirm }: Props) => (
  <>
    <Title>Pedido realizado - {orderId}</Title>
    <ConfirmationMessage>
      Estamos felizes em informar que seu pedido já está em processo de
      preparação e logo será entregue no endereço fornecido.
      <br />
      <br />
      Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
      realizar cobranças extras.
      <br />
      <br />
      Lembre-se da importância de higienizar as mãos após o recebimento do
      pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      <br />
      <br />
      Esperamos que desfrute de uma deliciosa e agradável experiência
      gastronômica. Bom apetite!
    </ConfirmationMessage>
    <ButtonContainer>
      <Button
        type="button"
        title="Concluir"
        onClick={onConfirm}
        fullWidth
        variant="secondary"
      >
        Concluir
      </Button>
    </ButtonContainer>
  </>
)

export default Confirmation
