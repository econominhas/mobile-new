import Login from '@/app/(auth)/_layout';
import { render } from '@testing-library/react-native';

describe('Login screen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render button facebook and text correctly', () => {
    const { getByText, getByTestId } = render(<Login />);

    expect(getByTestId('button-login-facebook')).toBeDefined();
    expect(getByText('Continuar com Facebook')).toBeDefined();
  });

  it('should render button google and text correctly', () => {
    const { getByText, getByTestId } = render(<Login />);

    expect(getByTestId('button-login-google')).toBeDefined();
    expect(getByText('Continuar com Google')).toBeDefined();
  });

  it('should render button login with mobile and text correctly', () => {
    const { getByText, getByTestId } = render(<Login />);

    expect(getByTestId('button-login-mobile')).toBeDefined();
    expect(getByText('Continuar com celular')).toBeDefined();
  });

  it('should render button login with email and text correctly', () => {
    const { getByText, getByTestId } = render(<Login />);

    expect(getByTestId('button-login-email')).toBeDefined();
    expect(getByText('Continuar com e-mail')).toBeDefined();
  });
});
