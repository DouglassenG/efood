import { useFormik } from 'formik'
import * as Yup from 'yup'
import Button from '../Button'
import { Input, InputGroup, Label, Row, ButtonContainer, Title } from '../Cart/styles'

type Props = {
  onNext: (data: any) => void
  onBack: () => void
}

const Delivery = ({ onNext, onBack }: Props) => {
  const formik = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string().required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O campo é obrigatório'),
      zipCode: Yup.string().required('O campo é obrigatório'),
      number: Yup.number().required('O campo é obrigatório'),
      complement: Yup.string()
    }),
    onSubmit: (values) => {
      onNext(values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <Title>Entrega</Title>

      <InputGroup>
        <Label htmlFor="receiver">Quem irá receber</Label>
        <Input
          id="receiver"
          type="text"
          name="receiver"
          value={formik.values.receiver}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.receiver && formik.touched.receiver ? 'error' : ''}
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="description">Endereço</Label>
        <Input
          id="description"
          type="text"
          name="description"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.description && formik.touched.description ? 'error' : ''}
        />
      </InputGroup>

      <InputGroup>
        <Label htmlFor="city">Cidade</Label>
        <Input
          id="city"
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.city && formik.touched.city ? 'error' : ''}
        />
      </InputGroup>

      <Row>
        <InputGroup style={{ maxWidth: '155px' }}>
          <Label htmlFor="zipCode">CEP</Label>
          <Input
            id="zipCode"
            type="text"
            name="zipCode"
            value={formik.values.zipCode}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.zipCode && formik.touched.zipCode ? 'error' : ''}
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="number">Número</Label>
          <Input
            id="number"
            type="number"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.errors.number && formik.touched.number ? 'error' : ''}
          />
        </InputGroup>
      </Row>

      <InputGroup>
        <Label htmlFor="complement">Complemento (opcional)</Label>
        <Input
          id="complement"
          type="text"
          name="complement"
          value={formik.values.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.errors.complement && formik.touched.complement ? 'error' : ''}
        />
      </InputGroup>

      <ButtonContainer>
        <Button
          type="button"
          title="Continuar com o pagamento"
          onClick={formik.submitForm}
          fullWidth
          variant="secondary"
        >
          Continuar com o pagamento
        </Button>
      </ButtonContainer>

      <ButtonContainer>
        <Button
          type="button"
          title="Voltar para o carrinho"
          onClick={onBack}
          fullWidth
          variant="secondary"
        >
          Voltar para o carrinho
        </Button>
      </ButtonContainer>
    </form>
  )
}

export default Delivery
