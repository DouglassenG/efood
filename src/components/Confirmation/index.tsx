import styled from 'styled-components'
import Button from '../Button'
import { ButtonContainer, Title } from '../Cart/styles'
import { cores } from '../../styles'

const Message = styled.p`
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    color: ${cores.brancoFundo};
    margin-bottom: 24px;
`

type Props = {
    orderId: string
    onConfirm: () => void
}

const Confirmation = ({ orderId, onConfirm }: Props) => (
    <>
        <Title>Pedido realizado - {orderId}</Title>
        <Message>
            Estamos felizes em informar que seu pedido já está em processo de preparação e logo será entregue no endereço fornecido.
            <br /><br />
            Gostaríamos de ressaltar que nossos entregadores não estão autorizados a realizar cobranças extras. 
            <br /><br />
            Lembre-se da importância de higienizar as mãos após o recebimento do pedido, garantindo assim sua segurança e bem-estar durante a refeição.
            <br /><br />
            Esperamos que desfrute de uma deliciosa e agradável experiência gastronômica. Bom apetite!
        </Message>
        <ButtonContainer>
            <Button type="button" title="Concluir" onClick={onConfirm} fullWidth variant="secondary">
                Concluir
            </Button>
        </ButtonContainer>
    </>
)

export default Confirmation
