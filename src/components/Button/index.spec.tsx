import { render } from '@testing-library/react'
import { Button } from '.'


describe('<Button>', () => {
    it('should render button', () => {
        const { getByText, getByRole } = render(<Button>btn</Button>)

        const buttonElement = getByRole('button')
        const buttonTextElement = getByText('btn')

        expect(buttonElement).toBeInTheDocument()
        expect(buttonTextElement).toBeInTheDocument()
    })

    it('should render "Carregando..." when isLoading was passed', () => {
        const { getByText } = render(<Button isLoading>btn</Button>)

        const isLoadingText = getByText('Carregando...')

        expect(isLoadingText).toBeInTheDocument()
    })
})