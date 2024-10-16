import React, { useState } from 'react';
import './MyTraining.scss';
import workoutData from '../../workout.json';

const defaultFormData = {
  title: "",
  body: "",
};

const MyTraining: React.FC = () => {
  const [isProgramVisible, setIsProgramVisible] = useState(false);
  const workoutPrograms = workoutData;
  const [formData, setFormData] = useState(defaultFormData);
  const { title, body } = formData;

  // State to store weights for each exercise
  const [exerciseWeights, setExerciseWeights] = useState<{ [key: number]: string }>({});

  const toggleProgramVisibility = () => {
    setIsProgramVisible(!isProgramVisible);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onWeightChange = (index: number, value: string) => {
    // Update the state for the weight input
    setExerciseWeights((prevWeights) => ({
      ...prevWeights,
      [index]: value,
    }));
  };

  const handleWeightKeyPress = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    // Check if the Enter key is pressed
    if (e.key === 'Enter') {
      e.preventDefault(); // Prevent default form submission behavior

      // Capture the current weight and display it
      const weightValue = exerciseWeights[index];
      if (weightValue) {
        console.log(`Weight for ${workoutPrograms.Pull[index].exercise}: ${weightValue} kg`);
      }
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
   
    console.log('Weights:', exerciseWeights);
    
  };

  return (
    <section className='myTraining'>
      <h1 className='myTrainingTitle' onClick={toggleProgramVisibility}>
        Pull Push Leg
      </h1>
      {isProgramVisible && (
        <div className='programList'>
          <h2>PULL</h2>
          <form onSubmit={onSubmit}>
            <ul>
              {workoutPrograms.Pull.map((item, index) => (
                <li key={index}>
                  <div>
                    {item.exercise} - {item.reps} 
                    {exerciseWeights[index] && (
                      <span> (Vikt: {exerciseWeights[index]} kg)</span>
                    )}
                  </div>
                  <input
                    type="number"
                    placeholder="Ange vikt (kg)"
                    value={exerciseWeights[index] || ''}
                    onChange={(e) => onWeightChange(index, e.target.value)}
                    onKeyPress={(e) => handleWeightKeyPress(e, index)}
                  />
                </li>
              ))}
            </ul>
            <button type="submit">Submit</button>
          </form>
          <h2>PUSH</h2>
          <ul>
            {workoutPrograms.Push.map((item, index) => (
              <li key={index}>
                <div>
                  {item.exercise} - {item.reps} 
                  {exerciseWeights[index] && (
                    <span> (Vikt: {exerciseWeights[index]} kg)</span>
                  )}
                </div>
                <input
                  type="number"
                  placeholder="Ange vikt (kg)"
                  value={exerciseWeights[index] || ''}
                  onChange={(e) => onWeightChange(index, e.target.value)}
                  onKeyPress={(e) => handleWeightKeyPress(e, index)}
                />
              </li>
            ))}
          </ul>
          <h2>LEG</h2>
          <ul>
            {workoutPrograms.Legs.map((item, index) => (
              <li key={index}>
                <div>
                  {item.exercise} - {item.reps} 
                  {exerciseWeights[index] && (
                    <span> (Vikt: {exerciseWeights[index]} kg)</span>
                  )}
                </div>
                <input
                  type="number"
                  placeholder="Ange vikt (kg)"
                  value={exerciseWeights[index] || ''}
                  onChange={(e) => onWeightChange(index, e.target.value)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default MyTraining;
