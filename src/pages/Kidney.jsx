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

function KidneyDiseaseForm() {
    const [formData, setFormData] = useState({
        age: 0,
        bp: 0,
        sg: 0,
        al: 0,
        su: 0,
        rbc: ["normal", "abnormal"],
        pc: ["normal", "abnormal"],
        pcc: ["present", "notpresent"],
        ba: ["present", "notpresent"],
        bgr: 0,
        bu: 0,
        sc: 0,
        sod: 0,
        pot: 0,
        hemo: 0,
        pcv: 0,
        wc: 0,
        rc: 0,
        htn: ["yes", "no"],
        dm: ["yes", "no"],
        cad: ["yes", "no"],
        appet: ["good", "poor"],
        pe: ["yes", "no"],
        ane: ["yes", "no"],
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
        navigate(`/consult?message=${encodeURIComponent('Your message here')}`);
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
                        Kidney Disease Test
                    </Typography>
                    <form onSubmit={handleSubmit} noValidate>
                        <Grid container spacing={2}>
                            {Object.entries(formData).map(([key, value], index) => (
                                <Grid item xs={6} key={key}>
                                    <InputLabel>{key}</InputLabel>
                                    {Array.isArray(value) ? (
                                        <Select
                                            variant="outlined"
                                            required
                                            fullWidth
                                            id={key}
                                            name={key}
                                            value={formData[key]}
                                            onChange={handleChange}
                                        >
                                            {value.map((option) => (
                                                <MenuItem key={option} value={option}>{option}</MenuItem>
                                            ))}
                                        </Select>
                                    ) : (
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
                                    )}
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
                                {result === 'ckd' ? 'Kidney Disease Detected' : 'No kidney disease detected.'}
                            </Typography>
                            {result === 'ckd' && (
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

export default KidneyDiseaseForm;
