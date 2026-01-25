import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import {
  Input,
  InputGroup,
  Label,
  Row,
  ButtonContainer,
  Title
} from '../Cart/styles'
import { parseToBrl } from '../../utils'

type Props = {
  onNext: (data: unknown) => void
  onBack: () => void
  price: number
}

const Payment = ({ onNext, onBack, price }: Props) => {
  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string().required('O campo é obrigatório'),
      cardNumber: Yup.string().required('O campo é obrigatório'),
      cvv: Yup.number().required('O campo é obrigatório'),
      expiresMonth: Yup.number().required('O campo é obrigatório'),
      expiresYear: Yup.number().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      onNext(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Title>Pagamento - Valor a pagar {parseToBrl(price)}</Title>

      <InputGroup>
        <Label htmlFor="cardName">Nome no cartão</Label>
        <Input
          id="cardName"
          type="text"
          name="cardName"
          value={formik.values.cardName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.cardName && formik.touched.cardName ? 'error' : ''
          }
        />
      </InputGroup>

      <Row>
        <InputGroup>
          <Label htmlFor="cardNumber">Número do cartão</Label>
          <Input
            id="cardNumber"
            type="text"
            name="cardNumber"
            value={formik.values.cardNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.cardNumber && formik.touched.cardNumber
                ? 'error'
                : ''
            }
          />
        </InputGroup>
        <InputGroup style={{ maxWidth: '87px' }}>
          <Label htmlFor="cvv">CVV</Label>
          <Input
            id="cvv"
            type="text"
            name="cvv"
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.cvv && formik.touched.cvv ? 'error' : ''}
          />
        </InputGroup>
      </Row>

      <Row>
        <InputGroup>
          <Label htmlFor="expiresMonth">Mês de vencimento</Label>
          <Input
            id="expiresMonth"
            type="text"
            name="expiresMonth"
            value={formik.values.expiresMonth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.expiresMonth && formik.touched.expiresMonth
                ? 'error'
                : ''
            }
          />
        </InputGroup>
        <InputGroup>
          <Label htmlFor="expiresYear">Ano de vencimento</Label>
          <Input
            id="expiresYear"
            type="text"
            name="expiresYear"
            value={formik.values.expiresYear}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.errors.expiresYear && formik.touched.expiresYear
                ? 'error'
                : ''
            }
          />
        </InputGroup>
      </Row>

      <ButtonContainer>
        <Button
          type="button"
          title="Finalizar pagamento"
          onClick={formik.submitForm}
          fullWidth
          variant="secondary"
        >
          Finalizar pagamento
        </Button>
      </ButtonContainer>

      <ButtonContainer>
        <Button
          type="button"
          title="Voltar para a edição de endereço"
          onClick={onBack}
          fullWidth
          variant="secondary"
        >
          Voltar para a edição de endereço
        </Button>
      </ButtonContainer>
    </form>
  )
}

export default Payment
