import { render } from '@testing-library/react-native';
import Home from '../app/(tabs)';

describe('Home', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render text correctly', () => {
    const { getByText } = render(<Home />);

    expect(getByText('Econominhas')).toBeDefined();
  });
});
