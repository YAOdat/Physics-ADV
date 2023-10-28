import React, { useState } from 'react';

function HookeLaw() {
    const [force, setForce] = useState('');
    const [springConstant, setSpringConstant] = useState('');
    const [displacement, setDisplacement] = useState('');

    const handleInputChange = (e, field) => {
        const value = parseFloat(e.target.value);
        if (field === 'force') {
            setForce(value);
        } else if (field === 'springConstant') {
            setSpringConstant(value);
        } else if (field === 'displacement') {
            setDisplacement(value);
        }
    };

    const calculateMissingValue = (field) => {
        if (field === 'displacement') {
            const calculatedDisplacement = force / (-1 * springConstant);
            setDisplacement(calculatedDisplacement);
        } else if (field === 'springConstant') {
            const calculatedSpringConstant = force / (-1 * displacement);
            setSpringConstant(calculatedSpringConstant);
        } else if (field === 'force') {
            const calculatedForce = -1 * springConstant * displacement;
            setForce(calculatedForce);
        }
    };

    return (
        <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Hooke's Law Calculator</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Force (F):</label>
                <input
                    type="number"
                    value={force}
                    onChange={(e) => handleInputChange(e, 'force')}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Spring Constant (k):</label>
                <input
                    type="number"
                    value={springConstant}
                    onChange={(e) => handleInputChange(e, 'springConstant')}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Displacement (x):</label>
                <input
                    type="number"
                    value={displacement}
                    onChange={(e) => handleInputChange(e, 'displacement')}
                    className="w-full px-3 py-2 border rounded-md"
                />
            </div>

            <button
                onClick={() => calculateMissingValue('force')}
                className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700"
            >
                Calculate Missing Force
            </button>

            <button
                onClick={() => calculateMissingValue('springConstant')}
                className="w-full bg-indigo-600 text-white font-semibold py-2 mt-4 rounded-md hover:bg-indigo-700"
            >
                Calculate Missing Spring Constant
            </button>

            <button
                onClick={() => calculateMissingValue('displacement')}
                className="w-full bg-indigo-600 text-white font-semibold py-2 mt-4 rounded-md hover-bg-indigo-700"
            >
                Calculate Missing Displacement
            </button>
        </div>
    );
}

export default HookeLaw;
