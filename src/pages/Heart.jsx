import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import PersonIcon from '@mui/icons-material/Person';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const defaultTheme = createTheme();

function HeartDiseaseForm() {
  const [formData, setFormData] = useState({
    age: 0,
    sex: 0,
    cp: 0,
    trestbps: 0,
    chol: 0,
    fbs: 0,
    restecg: 0,
    thalach: 0,
    exang: 0,
    oldpeak: 0,
    slope: 0,
    ca: 0,
    thal: 0,
    target: 0
  });

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
      // Handle response from ML model (e.g., display prediction results)
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
        <Navbar />
      <Container component="main" maxWidth="lg" className="bg-white p-6 mt-8 mb-6">
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
            Heart Disease Test
          </Typography>
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
              {Object.entries(formData).map(([key, value], index) => (
                <Grid item xs={6} key={key}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id={key}
                    label={key}
                    name={key}
                    type="number"
                    value={value}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: "#1c9bcd", width: '50%' }} // Reduce the width here
              >
                Predict
              </Button>
            </Box>
          </form>
          <Box mt={4}>
            <Typography variant="h6" gutterBottom>
              Field Details
            </Typography>
            <table className="border-collapse border-gray-400">
            <tbody>
                <tr>
                  <td className="border border-gray-400 p-2">Age</td>
                  <td className="border border-gray-400 p-2">Age of patient in years</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Sex</td>
                  <td className="border border-gray-400 p-2">0 = male<br />1 = female</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">CP</td>
                  <td className="border border-gray-400 p-2">0 = typical angina<br />1 = atypical angina<br />2 = non-anginal pain<br />3 = Asymptomatic</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Trestbps</td>
                  <td className="border border-gray-400 p-2">Resting blood pressure in mm HG</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Chol</td>
                  <td className="border border-gray-400 p-2">Serum cholesterol in mg/dl</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Fbs</td>
                  <td className="border border-gray-400 p-2">Fasting blood sugar level<br />(1 = above 120 mg/dl, 0 = below or equal to 120 mg/dl)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Restecg</td>
                  <td className="border border-gray-400 p-2">Resting electrocardiographic results<br />(0 = Normal, 1 = Having ST-T wave abnormality, 2 = Showing probable or definite left ventricular hypertrophy)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Thalach</td>
                  <td className="border border-gray-400 p-2">Maximum heart rate achieved during a stress test</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Exang</td>
                  <td className="border border-gray-400 p-2">Exercise-induced angina<br />(1 = yes, 0 = no)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Oldpeak</td>
                  <td className="border border-gray-400 p-2">ST depression induced by exercise relative to rest</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Slope</td>
                  <td className="border border-gray-400 p-2">Slope of the peak exercise ST segment<br />(0 = Upsloping, 1 = Flat, 2 = Downsloping)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Ca</td>
                  <td className="border border-gray-400 p-2">Number of major vessels (0-4) colored by fluoroscopy</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Thal</td>
                  <td className="border border-gray-400 p-2">Thalium stress test result<br />(0 = Normal, 1 = Fixed defect, 2 = Reversible defect, 3 = Not described)</td>
                </tr>
                <tr>
                  <td className="border border-gray-400 p-2">Target</td>
                  <td className="border border-gray-400 p-2">Heart disease status<br />(0 = no disease, 1 = presence of disease)</td>
                </tr>
              </tbody>
            </table>
          </Box>
        </Box>
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default HeartDiseaseForm;
