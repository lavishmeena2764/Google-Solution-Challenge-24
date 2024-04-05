/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';



const defaultTheme = createTheme();

function AlzheimerForm() {
    const [formData, setFormData] = useState({
        Group: ["Demented","Nondemented"],
        Visit: 0,
        MRDelay: 0,
        Sex: ["M","F"],
        Hand: ["R","L"],
        Age: 0,
        EDUC: 0,
        SES: 0,
        MMSE: 0,
        CDR: 0,
        eTIV: 0,
        nWBV: 0,
        ASF: 0
    });

    const [result, setResult] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
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
        navigate(`/user/contact?disease=${encodeURIComponent('alzheimer')}`);
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
                        Alzheimer&apos;s Disease Test
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            {Object.entries(formData).map(([key, value], index) => (
                                <Grid item xs={6} key={key}>
                                    <InputLabel>{key}</InputLabel>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id={key}
                                        name={key}
                                        type="number"
                                        value={formData[key]}
                                        onChange={handleChange}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2, bgcolor: "#1c9bcd", width: '50%' }}
                            >
                                Predict
                            </Button>
                        </Box>
                    </form>

                    {result !== null && (
                        <Container component="main" maxWidth="sm" className="bg-white p-8 mb-6">
                            <Typography variant="h6" align="center" gutterBottom>
                                Prediction Result:
                            </Typography>
                            <Typography variant="body1" align="center">
                            {result === 1 ? 'Alziemer Detected' : 'No Alziemer detected.'}
                            </Typography>
                            {result === 1 && (
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

                </Box>
            </Container>
            <Footer />
        </ThemeProvider>
    );
}

export default AlzheimerForm;
