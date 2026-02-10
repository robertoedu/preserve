import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Alert,
} from '@mui/material';
import { EmojiNature, CheckCircle } from '@mui/icons-material';

/**
 * Environmental Simulator Section - Seção do Simulador Ambiental
 * 
 * Simulador de pré-diagnóstico ambiental para ajudar o visitante
 * a entender se pode precisar de licença ou regularização
 */

const EnvironmentalSimulatorSection = () => {
  const [answers, setAnswers] = useState({
    location: '',
    intervention: '',
    construction: '',
    license: '',
  });

  const [showResult, setShowResult] = useState(false);

  const handleAnswerChange = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
    setShowResult(false);
  };

  const handleSubmit = () => {
    // Verificar se todas as perguntas foram respondidas
    if (Object.values(answers).some((answer) => answer === '')) {
      return;
    }
    setShowResult(true);
  };

  const isComplete = Object.values(answers).every((answer) => answer !== '');

  // Lógica para determinar o risco
  const needsLicense = () => {
    const { location, intervention, construction, license } = answers;
    
    // Alto risco se:
    // - Rural + intervenção
    // - Intervenção em vegetação
    // - Construção e não tem licença
    if (
      (location === 'rural' && intervention === 'sim') ||
      intervention === 'sim' ||
      (construction === 'sim' && license === 'nao')
    ) {
      return true;
    }
    return false;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '5551999999999'; // Substitua pelo número real
    const message = 'Olá! Fiz o simulador no site e gostaria de uma orientação técnica sobre licenciamento ambiental.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
      id="simulator"
    >
      <Container maxWidth="md">
        <Stack spacing={6} alignItems="center">
          {/* Cabeçalho da seção */}
          <Stack spacing={2} textAlign="center" maxWidth="700px">
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                mb: 1,
              }}
            >
              <EmojiNature sx={{ fontSize: 40, color: 'secondary.main' }} />
            </Box>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                position: 'relative',
                display: 'inline-block',
                mx: 'auto',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  backgroundColor: 'secondary.main',
                  borderRadius: 2,
                },
              }}
            >
              Seu projeto precisa de licença ambiental?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Responda algumas perguntas rápidas para ter uma orientação inicial.
            </Typography>
          </Stack>

          {/* Card com o simulador */}
          <Card
            elevation={3}
            sx={{
              width: '100%',
              maxWidth: '700px',
            }}
          >
            <CardContent sx={{ p: { xs: 3, md: 5 } }}>
              <Stack spacing={4}>
                {/* Pergunta 1 */}
                <Box>
                  <Typography
                    variant="h4"
                    color="primary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    1. O projeto está localizado em área rural ou urbana?
                  </Typography>
                  <RadioGroup
                    value={answers.location}
                    onChange={(e) => handleAnswerChange('location', e.target.value)}
                  >
                    <FormControlLabel
                      value="rural"
                      control={<Radio color="secondary" />}
                      label="Rural"
                      sx={{ mb: 1 }}
                    />
                    <FormControlLabel
                      value="urbana"
                      control={<Radio color="secondary" />}
                      label="Urbana"
                    />
                  </RadioGroup>
                </Box>

                {/* Pergunta 2 */}
                <Box>
                  <Typography
                    variant="h4"
                    color="primary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    2. Haverá intervenção em vegetação ou recursos naturais?
                  </Typography>
                  <RadioGroup
                    value={answers.intervention}
                    onChange={(e) => handleAnswerChange('intervention', e.target.value)}
                  >
                    <FormControlLabel
                      value="sim"
                      control={<Radio color="secondary" />}
                      label="Sim"
                      sx={{ mb: 1 }}
                    />
                    <FormControlLabel
                      value="nao"
                      control={<Radio color="secondary" />}
                      label="Não"
                    />
                  </RadioGroup>
                </Box>

                {/* Pergunta 3 */}
                <Box>
                  <Typography
                    variant="h4"
                    color="primary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    3. O projeto envolve construção, ampliação ou atividade produtiva?
                  </Typography>
                  <RadioGroup
                    value={answers.construction}
                    onChange={(e) => handleAnswerChange('construction', e.target.value)}
                  >
                    <FormControlLabel
                      value="sim"
                      control={<Radio color="secondary" />}
                      label="Sim"
                      sx={{ mb: 1 }}
                    />
                    <FormControlLabel
                      value="nao"
                      control={<Radio color="secondary" />}
                      label="Não"
                    />
                  </RadioGroup>
                </Box>

                {/* Pergunta 4 */}
                <Box>
                  <Typography
                    variant="h4"
                    color="primary"
                    gutterBottom
                    sx={{ mb: 2 }}
                  >
                    4. Já possui alguma licença ambiental?
                  </Typography>
                  <RadioGroup
                    value={answers.license}
                    onChange={(e) => handleAnswerChange('license', e.target.value)}
                  >
                    <FormControlLabel
                      value="sim"
                      control={<Radio color="secondary" />}
                      label="Sim"
                      sx={{ mb: 1 }}
                    />
                    <FormControlLabel
                      value="nao"
                      control={<Radio color="secondary" />}
                      label="Não"
                    />
                  </RadioGroup>
                </Box>

                {/* Botão para ver resultado */}
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  disabled={!isComplete}
                  sx={{
                    backgroundColor: 'cta.main',
                    color: 'white',
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: 'primary.main',
                    },
                    '&:disabled': {
                      backgroundColor: 'grey.300',
                    },
                  }}
                >
                  Ver Resultado
                </Button>

                {/* Resultado */}
                {showResult && (
                  <Box
                    sx={{
                      animation: 'fadeIn 0.5s ease-in',
                      '@keyframes fadeIn': {
                        from: { opacity: 0, transform: 'translateY(10px)' },
                        to: { opacity: 1, transform: 'translateY(0)' },
                      },
                    }}
                  >
                    {needsLicense() ? (
                      <Alert
                        severity="warning"
                        icon={<EmojiNature />}
                        sx={{
                          backgroundColor: 'rgba(255, 152, 0, 0.1)',
                          border: '2px solid',
                          borderColor: 'rgba(255, 152, 0, 0.3)',
                          '& .MuiAlert-icon': {
                            color: '#FF9800',
                          },
                        }}
                      >
                        <Typography variant="body1" fontWeight={600} gutterBottom>
                          Seu projeto pode precisar de licenciamento ou regularização ambiental.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Uma análise técnica é recomendada para garantir conformidade legal
                          e evitar problemas futuros.
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleWhatsAppClick}
                          sx={{
                            backgroundColor: '#25D366',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: '#20BA5A',
                            },
                          }}
                        >
                          Falar com uma consultora
                        </Button>
                      </Alert>
                    ) : (
                      <Alert
                        severity="success"
                        icon={<CheckCircle />}
                        sx={{
                          backgroundColor: 'rgba(95, 166, 139, 0.1)',
                          border: '2px solid',
                          borderColor: 'secondary.main',
                        }}
                      >
                        <Typography variant="body1" fontWeight={600} gutterBottom>
                          Seu projeto pode ter exigências ambientais simplificadas.
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                          Ainda assim, a avaliação técnica garante segurança e conformidade
                          com as normas locais.
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          onClick={handleWhatsAppClick}
                          sx={{
                            backgroundColor: 'secondary.main',
                            color: 'white',
                            '&:hover': {
                              backgroundColor: 'primary.main',
                            },
                          }}
                        >
                          Falar com uma consultora
                        </Button>
                      </Alert>
                    )}

                    {/* Aviso institucional */}
                    <Box
                      sx={{
                        mt: 3,
                        p: 2,
                        borderRadius: 1,
                        backgroundColor: 'rgba(47, 93, 80, 0.05)',
                        borderLeft: '4px solid',
                        borderColor: 'primary.main',
                      }}
                    >
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontStyle: 'italic', fontSize: '0.875rem' }}
                      >
                        <strong>Importante:</strong> Este é apenas um diagnóstico inicial.
                        Cada projeto exige avaliação específica de acordo com a legislação
                        municipal, estadual e federal vigente.
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
};

export default EnvironmentalSimulatorSection;
