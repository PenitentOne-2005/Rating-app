const ErrorStatus = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <div
      style={{
        marginTop: '15px',
        padding: '12px',
        background: '#FED7D7',
        color: '#742A2A',
        borderRadius: '4px',
        fontWeight: 500,
      }}
    >
      ❌ {errorMessage}
    </div>
  );
};

export default ErrorStatus;
