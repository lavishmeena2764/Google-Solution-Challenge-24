/* eslint-disable no-undef */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const defaultTheme = createTheme();

function PregnancyRiskForm() {
  const [formData, setFormData] = useState({
    age: 0,
    SystolicBP: 0,
    DiastolicBP: 0,
    BS: 0,
    BodyTemp: 0,
    HeartRate: 0
  });
  
  const [result, setResult] = useState("low risk");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: Number(value)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send formData to your ML model endpoint
      const response = await fetch(process.env.REACT_APP_ML_MODEL_PATH, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setResult(data.data.data.data)
      // Handle response from ML model (e.g., display prediction results)
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleConsultClick = () => {
    navigate(`/user/contact?disease=${encodeURIComponent('maternity')}`);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Container component="main" maxWidth="sm" className="bg-white p-8 mt-4 mb-6">
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#1c9bcd" }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5" className="mb-4">
            Pregnancy Risk Test
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              {Object.entries(formData).map(([key, value], index) => (
                <Grid item xs={12} key={index}>
                  <TextField
                    autoComplete="off"
                    name={key}
                    variant="outlined"
                    required
                    fullWidth
                    id={key}
                    label={key}
                    type="number"
                    value={value}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, bgcolor: "#1c9bcd" }}
            >
              Predict
            </Button>
          </form>
        </Box>
      </Container>
      {result !== null && (
        <Container component="main" maxWidth="sm" className="bg-white p-8 mb-6">
          <Typography variant="h6" align="center" gutterBottom>
            Prediction Result:
          </Typography>
          <Typography variant="body1" align="center">
          <p>You have a {result} level</p>
          </Typography>
          {(result === 'high risk' || result === 'mid risk') && (
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleConsultClick}
              sx={{ mt: 2 }}
            >
              Consult
            </Button>
          )}
        </Container>
      )}
      <Footer />
    </ThemeProvider>
  );
}

export default PregnancyRiskForm;
