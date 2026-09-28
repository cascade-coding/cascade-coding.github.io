
export function generateId(prefix = 'x', start = 1, digits = 3) {
  const counter = { current: start };

  return () => {
    const id = `${prefix}${String(counter.current).padStart(digits, '0')}`;
    counter.current += 1;
    return id;
  };
}
