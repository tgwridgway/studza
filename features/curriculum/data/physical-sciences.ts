import type { Flashcard, QuizQuestion, FeynmanTopic } from "@/features/curriculum/types";

export const flashcards: Flashcard[] = [
    {
        "id": 1,
        "unit": "momentum",
        "q": "Define momentum.",
        "a": "Momentum (p) is the product of an object's mass and its velocity: p = mv. It is a vector quantity measured in kg·m·s⁻¹, and its direction is the same as the velocity."
    },
    {
        "id": 2,
        "unit": "momentum",
        "q": "State Newton's Second Law in terms of momentum.",
        "a": "The net (resultant) force acting on an object is equal to the rate of change of momentum of the object: F_net = Δp/Δt."
    },
    {
        "id": 3,
        "unit": "momentum",
        "q": "Define impulse and state its relationship to momentum.",
        "a": "Impulse (J) is the product of the net force acting on an object and the time the force acts: J = F_net · Δt. Impulse equals the change in momentum: J = Δp = m(v_f − v_i)."
    },
    {
        "id": 4,
        "unit": "momentum",
        "q": "State the Law of Conservation of Linear Momentum.",
        "a": "The total linear momentum of an isolated system remains constant (is conserved). In an isolated system: Σp_before = Σp_after, i.e., m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f."
    },
    {
        "id": 5,
        "unit": "momentum",
        "q": "What is an isolated system (in terms of momentum)?",
        "a": "An isolated system is one on which no external net force acts. Internal forces (e.g., between colliding objects) do not change the total momentum of the system."
    },
    {
        "id": 6,
        "unit": "momentum",
        "q": "Distinguish between elastic and inelastic collisions.",
        "a": "Elastic collision: both total momentum and total kinetic energy are conserved. Inelastic collision: total momentum is conserved but total kinetic energy is NOT conserved (some KE is converted to sound, heat, or deformation). A perfectly inelastic collision is one where the objects stick together after collision."
    },
    {
        "id": 7,
        "unit": "momentum",
        "q": "Why do airbags and crumple zones reduce injury during a car crash?",
        "a": "They increase the time (Δt) over which the momentum changes. Since F_net = Δp/Δt, for the same change in momentum, a longer time means a smaller force is exerted on the person, reducing injury."
    },
    {
        "id": 8,
        "unit": "momentum",
        "q": "How do you determine the direction convention when solving momentum problems?",
        "a": "Choose a positive direction (e.g., to the right or forward). Velocities in that direction are positive; velocities in the opposite direction are negative. Apply the sign convention consistently throughout the calculation."
    },
    {
        "id": 9,
        "unit": "projectile",
        "q": "What is vertical projectile motion (free fall)?",
        "a": "Motion of an object under the influence of gravitational acceleration only (g = 9.8 m·s⁻² downward). Air resistance is ignored. The only force acting on the object is gravitational force (weight)."
    },
    {
        "id": 10,
        "unit": "projectile",
        "q": "List the three equations of motion used for vertical projectile motion.",
        "a": "1) v_f = v_i + gΔt\n2) Δy = v_i·Δt + ½g(Δt)²\n3) v_f² = v_i² + 2gΔy\nwhere g = 9.8 m·s⁻² (take as positive downward or negative upward, depending on convention)."
    },
    {
        "id": 11,
        "unit": "projectile",
        "q": "What happens to the velocity of an object thrown vertically upward at its maximum height?",
        "a": "At maximum height, the velocity is zero (v_f = 0). However, the acceleration remains g = 9.8 m·s⁻² downward throughout the entire motion."
    },
    {
        "id": 12,
        "unit": "projectile",
        "q": "For an object thrown upward and returning to the same height, compare the time going up and the time coming down.",
        "a": "The time going up equals the time coming down (t_up = t_down). The total time in the air is 2 × t_up. The speed at which it returns to the starting height equals the initial speed (but in the opposite direction)."
    },
    {
        "id": 13,
        "unit": "projectile",
        "q": "Describe the position-time, velocity-time, and acceleration-time graphs for an object in free fall (dropped from rest).",
        "a": "Position-time: concave-up parabola (displacement increases at an increasing rate).\nVelocity-time: straight line with positive slope (velocity increases uniformly).\nAcceleration-time: horizontal line at g = 9.8 m·s⁻² (constant acceleration)."
    },
    {
        "id": 14,
        "unit": "projectile",
        "q": "How do you determine displacement from a velocity-time graph for projectile motion?",
        "a": "Displacement equals the area between the velocity-time graph and the time axis. Areas above the time axis are positive; areas below are negative."
    },
    {
        "id": 15,
        "unit": "projectile",
        "q": "An object is thrown upward with initial velocity v_i. How do you calculate the maximum height reached?",
        "a": "At maximum height, v_f = 0. Use v_f² = v_i² + 2gΔy. With upward positive: 0 = v_i² + 2(−9.8)Δy, so Δy = v_i²/(2 × 9.8)."
    },
    {
        "id": 16,
        "unit": "projectile",
        "q": "Why does the acceleration remain constant during vertical projectile motion even when the object momentarily stops at the top?",
        "a": "The gravitational force (weight) acts on the object throughout the motion. Since F = mg is constant and mass does not change, the acceleration a = g remains constant at 9.8 m·s⁻² downward, regardless of the velocity."
    },
    {
        "id": 17,
        "unit": "organic",
        "q": "What is a homologous series?",
        "a": "A homologous series is a group of organic compounds that have the same general formula, the same functional group, and similar chemical properties. Consecutive members differ by a –CH₂– unit."
    },
    {
        "id": 18,
        "unit": "organic",
        "q": "Name the first eight homologous series in CAPS and their functional groups.",
        "a": "1) Alkanes (C–C single bond)\n2) Alkenes (C=C double bond)\n3) Alkynes (C≡C triple bond)\n4) Alcohols (–OH hydroxyl)\n5) Carboxylic acids (–COOH)\n6) Esters (–COO–)\n7) Aldehydes (–CHO)\n8) Ketones (C=O, not at end)"
    },
    {
        "id": 19,
        "unit": "organic",
        "q": "Give the general formula for alkanes, alkenes, and alkynes.",
        "a": "Alkanes: CₙH₂ₙ₊₂\nAlkenes: CₙH₂ₙ\nAlkynes: CₙH₂ₙ₋₂"
    },
    {
        "id": 20,
        "unit": "organic",
        "q": "What is the IUPAC naming convention for organic molecules?",
        "a": "1) Find the longest carbon chain containing the functional group.\n2) Number the chain so the functional group gets the lowest number.\n3) Name substituents (methyl, ethyl, etc.) with position numbers.\n4) Use prefixes (di-, tri-) for repeated substituents.\n5) Use the correct suffix for the functional group (-ane, -ene, -ol, -al, -one, -anoic acid, -anoate)."
    },
    {
        "id": 21,
        "unit": "organic",
        "q": "Define structural isomers and give an example.",
        "a": "Structural isomers are compounds with the same molecular formula but different structural formulae (different arrangement of atoms). Example: butane (CH₃CH₂CH₂CH₃) and 2-methylpropane (CH₃CH(CH₃)CH₃) both have the formula C₄H₁₀."
    },
    {
        "id": 22,
        "unit": "organic",
        "q": "What is an addition reaction? Give an example.",
        "a": "An addition reaction occurs when atoms/molecules are added across a double or triple bond, converting it to a single bond. The unsaturated molecule becomes saturated. Example: ethene + HBr → bromoethane (CH₂=CH₂ + HBr → CH₃CHBr)."
    },
    {
        "id": 23,
        "unit": "organic",
        "q": "What is a substitution reaction? Give an example.",
        "a": "A substitution reaction occurs when an atom or group of atoms in a molecule is replaced by another atom or group. Typical of saturated compounds (alkanes). Example: CH₄ + Cl₂ → CH₃Cl + HCl (in the presence of UV light)."
    },
    {
        "id": 24,
        "unit": "organic",
        "q": "What is an elimination reaction? Give an example.",
        "a": "An elimination reaction is the removal of atoms from an organic molecule to form a small molecule (such as H₂O), resulting in an unsaturated product. Example: ethanol → ethene + water (CH₃CH₂OH → CH₂=CH₂ + H₂O) in the presence of H₂SO₄ and heat."
    },
    {
        "id": 25,
        "unit": "organic",
        "q": "What is an esterification reaction?",
        "a": "Esterification is a reaction between a carboxylic acid and an alcohol to form an ester and water. It requires an acid catalyst (e.g., concentrated H₂SO₄). Example: ethanoic acid + methanol → methyl ethanoate + water."
    },
    {
        "id": 26,
        "unit": "organic",
        "q": "How do intermolecular forces affect the boiling points of organic compounds?",
        "a": "Stronger intermolecular forces result in higher boiling points. Alcohols and carboxylic acids have hydrogen bonding (strongest), giving higher boiling points than similarly sized alkanes (London/dispersion forces only). Longer carbon chains also increase boiling points due to increased London forces."
    },
    {
        "id": 27,
        "unit": "work-energy",
        "q": "Define work done by a force.",
        "a": "Work is the product of the applied force and the displacement in the direction of the force: W = FΔx·cosθ, where θ is the angle between the force and the displacement. Work is a scalar quantity measured in joules (J)."
    },
    {
        "id": 28,
        "unit": "work-energy",
        "q": "When is work positive, negative, or zero?",
        "a": "Positive work: force and displacement in the same direction (θ < 90°).\nNegative work: force and displacement in opposite directions (θ > 90°), e.g., friction.\nZero work: force perpendicular to displacement (θ = 90°), or displacement = 0."
    },
    {
        "id": 29,
        "unit": "work-energy",
        "q": "State the work-energy theorem.",
        "a": "The net work done on an object equals its change in kinetic energy: W_net = ΔEk = ½mv_f² − ½mv_i²."
    },
    {
        "id": 30,
        "unit": "work-energy",
        "q": "What is gravitational potential energy?",
        "a": "The energy an object possesses due to its position above a reference point: Ep = mgh, where m is mass, g is gravitational acceleration (9.8 m·s⁻²), and h is the vertical height above the reference level."
    },
    {
        "id": 31,
        "unit": "work-energy",
        "q": "State the law of conservation of mechanical energy.",
        "a": "In the absence of non-conservative forces (e.g., friction, applied force), the total mechanical energy (Ek + Ep) of an isolated system remains constant: Ek₁ + Ep₁ = Ek₂ + Ep₂."
    },
    {
        "id": 32,
        "unit": "work-energy",
        "q": "What happens to mechanical energy when non-conservative forces act?",
        "a": "The work done by all non-conservative forces equals the change in total mechanical energy: W_nc = ΔEk + ΔEp = (Ek_f − Ek_i) + (Ep_f − Ep_i). Friction converts mechanical energy to thermal energy."
    },
    {
        "id": 33,
        "unit": "work-energy",
        "q": "Define power and give its formula.",
        "a": "Power is the rate at which work is done (or energy is transferred): P = W/Δt. Measured in watts (W), where 1 W = 1 J·s⁻¹. Also: P = Fv (when force is in the direction of velocity)."
    },
    {
        "id": 34,
        "unit": "work-energy",
        "q": "Distinguish between conservative and non-conservative forces.",
        "a": "A conservative force is one for which the work done is independent of the path taken (e.g., gravitational force, elastic spring force). A non-conservative force is one for which the work done depends on the path (e.g., friction, air resistance, applied force)."
    },
    {
        "id": 35,
        "unit": "doppler",
        "q": "What is the Doppler effect?",
        "a": "The Doppler effect is the apparent change in frequency (or pitch) of a wave when there is relative motion between the source and the observer. The actual frequency of the source does not change."
    },
    {
        "id": 36,
        "unit": "doppler",
        "q": "What happens to the observed frequency when the source moves toward the observer?",
        "a": "The observed frequency increases (higher pitch). The wavelengths in front of the moving source are compressed (shorter wavelength), so more wave crests reach the observer per second."
    },
    {
        "id": 37,
        "unit": "doppler",
        "q": "What happens to the observed frequency when the source moves away from the observer?",
        "a": "The observed frequency decreases (lower pitch). The wavelengths behind the moving source are stretched (longer wavelength), so fewer wave crests reach the observer per second."
    },
    {
        "id": 38,
        "unit": "doppler",
        "q": "Give the Doppler effect formula for sound.",
        "a": "f_L = f_S × (v ± v_L) / (v ∓ v_S), where f_L = listener frequency, f_S = source frequency, v = speed of sound, v_L = speed of listener, v_S = speed of source. Use upper signs when approaching, lower signs when receding."
    },
    {
        "id": 39,
        "unit": "doppler",
        "q": "What is red shift and what does it indicate?",
        "a": "Red shift is the apparent increase in wavelength (decrease in frequency) of light from stars and galaxies moving away from Earth. It indicates that the universe is expanding. The greater the red shift, the faster the galaxy is receding."
    },
    {
        "id": 40,
        "unit": "doppler",
        "q": "How is the Doppler effect used in everyday applications?",
        "a": "Applications include: speed traps (radar guns for traffic), medical ultrasound (measuring blood flow velocity), weather radar (tracking storm movement), and astronomy (determining whether stars/galaxies are approaching or receding)."
    },
    {
        "id": 41,
        "unit": "doppler",
        "q": "What is blue shift?",
        "a": "Blue shift is the apparent decrease in wavelength (increase in frequency) of light from a source moving toward the observer. It means the star or galaxy is approaching Earth."
    },
    {
        "id": 42,
        "unit": "rate-equilibrium",
        "q": "Define rate of reaction.",
        "a": "The rate of reaction is the change in concentration of reactants or products per unit time. Rate = Δ[concentration]/Δt, measured in mol·dm⁻³·s⁻¹."
    },
    {
        "id": 43,
        "unit": "rate-equilibrium",
        "q": "List five factors that affect the rate of a chemical reaction.",
        "a": "1) Concentration (or pressure for gases)\n2) Temperature\n3) Surface area of solid reactants\n4) Presence of a catalyst\n5) Nature of the reactants"
    },
    {
        "id": 44,
        "unit": "rate-equilibrium",
        "q": "Explain how increasing temperature increases the rate of reaction (in terms of collision theory).",
        "a": "Increasing temperature increases the average kinetic energy of particles. More particles have energy greater than or equal to the activation energy (Ea). This increases the number of effective collisions per unit time, increasing the rate."
    },
    {
        "id": 45,
        "unit": "rate-equilibrium",
        "q": "What is activation energy?",
        "a": "Activation energy (Ea) is the minimum amount of energy that colliding particles need in order to react (have an effective collision). It is the energy barrier that must be overcome for a reaction to occur."
    },
    {
        "id": 46,
        "unit": "rate-equilibrium",
        "q": "How does a catalyst increase the rate of reaction?",
        "a": "A catalyst provides an alternative reaction pathway with a lower activation energy. This means more particles have sufficient energy to react, increasing the number of effective collisions per unit time. The catalyst is not consumed in the reaction."
    },
    {
        "id": 47,
        "unit": "rate-equilibrium",
        "q": "What is chemical equilibrium?",
        "a": "Chemical equilibrium is a dynamic state in a closed system where the rate of the forward reaction equals the rate of the reverse reaction, and the concentrations of reactants and products remain constant (but not necessarily equal)."
    },
    {
        "id": 48,
        "unit": "rate-equilibrium",
        "q": "State Le Chatelier's Principle.",
        "a": "When an external stress (change in concentration, temperature, or pressure) is applied to a system in equilibrium, the equilibrium will shift in the direction that tends to reduce the effect of that stress."
    },
    {
        "id": 49,
        "unit": "rate-equilibrium",
        "q": "What is the equilibrium constant (Kc) and what does its value indicate?",
        "a": "Kc is the ratio of the concentrations of products to reactants at equilibrium, each raised to the power of their stoichiometric coefficients. Kc = [products]^n / [reactants]^m. A large Kc (>>1) means products are favoured; a small Kc (<<1) means reactants are favoured."
    },
    {
        "id": 50,
        "unit": "rate-equilibrium",
        "q": "How does the addition of a catalyst affect the equilibrium position?",
        "a": "A catalyst does NOT change the position of equilibrium. It increases the rates of both the forward and reverse reactions equally, so the system reaches equilibrium faster but the equilibrium concentrations remain unchanged. Kc is unaffected."
    },
    {
        "id": 51,
        "unit": "rate-equilibrium",
        "q": "How does a change in pressure affect equilibrium for gaseous reactions?",
        "a": "Increasing pressure (by decreasing volume) shifts the equilibrium toward the side with fewer moles of gas. Decreasing pressure shifts the equilibrium toward the side with more moles of gas. If both sides have the same number of moles, pressure change has no effect."
    },
    {
        "id": 52,
        "unit": "electrostatics",
        "q": "State Coulomb's Law.",
        "a": "The electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them: F = kQ₁Q₂/r², where k = 9 × 10⁹ N·m²·C⁻²."
    },
    {
        "id": 53,
        "unit": "electrostatics",
        "q": "Define electric field.",
        "a": "An electric field is a region of space in which an electric charge experiences a force. The electric field strength at a point is the force per unit positive charge placed at that point: E = F/q, measured in N·C⁻¹ or V·m⁻¹."
    },
    {
        "id": 54,
        "unit": "electrostatics",
        "q": "Give the formula for the electric field due to a point charge.",
        "a": "E = kQ/r², where k = 9 × 10⁹ N·m²·C⁻², Q is the source charge (in coulombs), and r is the distance from the charge to the point."
    },
    {
        "id": 55,
        "unit": "electrostatics",
        "q": "Describe the direction of electric field lines.",
        "a": "Electric field lines point away from positive charges and toward negative charges. They never cross. The density of field lines indicates the strength of the field — closer lines mean a stronger field."
    },
    {
        "id": 56,
        "unit": "electrostatics",
        "q": "Define electric potential difference (voltage).",
        "a": "The potential difference between two points is the work done per unit positive charge to move the charge from one point to the other: V = W/q, measured in volts (V), where 1 V = 1 J·C⁻¹."
    },
    {
        "id": 57,
        "unit": "electrostatics",
        "q": "What happens when a charge is placed in a uniform electric field?",
        "a": "The charge experiences a constant electrostatic force: F = qE. A positive charge accelerates in the direction of the electric field; a negative charge accelerates opposite to the electric field direction."
    },
    {
        "id": 58,
        "unit": "electrostatics",
        "q": "How do you find the net electric field at a point between two charges?",
        "a": "Calculate the electric field due to each charge separately at that point using E = kQ/r². Determine the direction of each field. Then add the fields as vectors — fields in the same direction add; fields in opposite directions subtract."
    },
    {
        "id": 59,
        "unit": "circuits",
        "q": "Define electromotive force (emf) of a battery.",
        "a": "The emf (ε) of a battery is the maximum potential difference the battery can provide when no current flows (open circuit). It equals the total energy supplied per unit charge: ε = W/q."
    },
    {
        "id": 60,
        "unit": "circuits",
        "q": "What is internal resistance?",
        "a": "Internal resistance (r) is the resistance within the battery itself due to the chemicals and components inside it. It causes a voltage drop inside the battery when current flows, so the terminal potential difference is less than the emf."
    },
    {
        "id": 61,
        "unit": "circuits",
        "q": "State the relationship between emf, terminal voltage, and internal resistance.",
        "a": "ε = V_terminal + Ir, or equivalently ε = I(R_ext + r), where V_terminal = IR_ext is the potential difference across the external circuit and Ir is the 'lost volts' across the internal resistance."
    },
    {
        "id": 62,
        "unit": "circuits",
        "q": "State Ohm's Law.",
        "a": "The potential difference across a conductor is directly proportional to the current through it, provided the temperature remains constant: V = IR."
    },
    {
        "id": 63,
        "unit": "circuits",
        "q": "How do you calculate total resistance for resistors in series?",
        "a": "For resistors in series: R_total = R₁ + R₂ + R₃ + ... The same current flows through each resistor, but the voltage divides across them."
    },
    {
        "id": 64,
        "unit": "circuits",
        "q": "How do you calculate total resistance for resistors in parallel?",
        "a": "For resistors in parallel: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ... The voltage across each resistor is the same, but the current divides between them."
    },
    {
        "id": 65,
        "unit": "circuits",
        "q": "Define electrical power and give its formulae.",
        "a": "Electrical power is the rate at which electrical energy is converted to other forms: P = W/Δt = VI = I²R = V²/R. Measured in watts (W)."
    },
    {
        "id": 66,
        "unit": "circuits",
        "q": "What happens to the terminal voltage of a battery when the external resistance decreases?",
        "a": "When external resistance decreases, the current increases (I = ε/(R_ext + r)). The voltage drop across the internal resistance (Ir) increases, so the terminal voltage (V = ε − Ir) decreases."
    },
    {
        "id": 67,
        "unit": "circuits",
        "q": "How does adding a resistor in parallel affect total resistance and current from the battery?",
        "a": "Adding a resistor in parallel decreases the total external resistance. Since I = ε/(R_ext + r), a decrease in R_ext increases the total current drawn from the battery."
    },
    {
        "id": 68,
        "unit": "electrochemistry",
        "q": "What is an electrochemical cell?",
        "a": "An electrochemical cell converts chemical energy to electrical energy (galvanic/voltaic cell) or uses electrical energy to drive a non-spontaneous chemical reaction (electrolytic cell)."
    },
    {
        "id": 69,
        "unit": "electrochemistry",
        "q": "Describe the structure of a galvanic cell.",
        "a": "A galvanic cell has two half-cells, each containing an electrode in an electrolyte solution. The half-cells are connected by a salt bridge (to maintain electrical neutrality) and an external wire (for electron flow). The anode (oxidation) is the negative terminal; the cathode (reduction) is the positive terminal."
    },
    {
        "id": 70,
        "unit": "electrochemistry",
        "q": "What is the purpose of the salt bridge in a galvanic cell?",
        "a": "The salt bridge completes the internal circuit by allowing ions to flow between the two half-cells. It maintains electrical neutrality in each half-cell by providing cations to the cathode half-cell (where positive ions are removed) and anions to the anode half-cell (where positive ions are produced)."
    },
    {
        "id": 71,
        "unit": "electrochemistry",
        "q": "How do you calculate the emf of a standard galvanic cell?",
        "a": "E°_cell = E°_cathode − E°_anode (using standard reduction potentials from the Table of Standard Reduction Potentials). The more positive half-cell is the cathode; the more negative half-cell is the anode."
    },
    {
        "id": 72,
        "unit": "electrochemistry",
        "q": "What is the standard hydrogen electrode (SHE)?",
        "a": "The SHE is the reference electrode used to measure standard electrode potentials. It consists of a platinum electrode in 1 mol·dm⁻³ HCl with H₂ gas at 1 atm bubbled over it, at 25°C. Its potential is defined as 0.00 V."
    },
    {
        "id": 73,
        "unit": "electrochemistry",
        "q": "What is the difference between a galvanic cell and an electrolytic cell?",
        "a": "Galvanic cell: spontaneous reaction (ΔG < 0), produces electricity, E°_cell > 0, anode is negative, cathode is positive.\nElectrolytic cell: non-spontaneous reaction driven by external power source, E°_cell < 0, anode is positive, cathode is negative."
    },
    {
        "id": 74,
        "unit": "electrochemistry",
        "q": "What happens during the electrolysis of a copper(II) sulfate solution with copper electrodes?",
        "a": "At the cathode (reduction): Cu²⁺ + 2e⁻ → Cu (copper is deposited). At the anode (oxidation): Cu → Cu²⁺ + 2e⁻ (copper electrode dissolves). The concentration of Cu²⁺ ions in solution remains constant. This is the basis of electroplating and copper refining."
    },
    {
        "id": 75,
        "unit": "electrochemistry",
        "q": "How do you use the Table of Standard Reduction Potentials to determine which substance is oxidised or reduced?",
        "a": "The substance higher on the table (more negative E°) is more easily oxidised (stronger reducing agent, acts as anode). The substance lower on the table (more positive E°) is more easily reduced (stronger oxidising agent, acts as cathode)."
    },
    {
        "id": 76,
        "unit": "photoelectric",
        "q": "What is the photoelectric effect?",
        "a": "The photoelectric effect is the emission of electrons from the surface of a metal when light of a sufficiently high frequency (above the threshold frequency) shines on it. The emitted electrons are called photoelectrons."
    },
    {
        "id": 77,
        "unit": "photoelectric",
        "q": "What is the threshold frequency (f₀)?",
        "a": "The threshold frequency is the minimum frequency of incident light required to eject electrons from the surface of a particular metal. Below this frequency, no electrons are emitted regardless of the intensity of the light."
    },
    {
        "id": 78,
        "unit": "photoelectric",
        "q": "What is the work function (W₀)?",
        "a": "The work function is the minimum energy needed to remove an electron from the surface of a metal: W₀ = hf₀, where h is Planck's constant (6.63 × 10⁻³⁴ J·s) and f₀ is the threshold frequency."
    },
    {
        "id": 79,
        "unit": "photoelectric",
        "q": "State the photoelectric equation.",
        "a": "E = W₀ + Ek(max), or hf = hf₀ + ½mv²_max. The energy of the incident photon equals the work function plus the maximum kinetic energy of the emitted photoelectron."
    },
    {
        "id": 80,
        "unit": "photoelectric",
        "q": "How does increasing the intensity of light above the threshold frequency affect the photoelectric effect?",
        "a": "Increasing intensity increases the number of photons striking the surface per second, so more electrons are emitted (higher current). However, the maximum kinetic energy of the emitted electrons does NOT change — that depends only on the frequency of the light."
    },
    {
        "id": 81,
        "unit": "photoelectric",
        "q": "How does increasing the frequency of light affect the photoelectric effect?",
        "a": "Increasing the frequency (above f₀) increases the energy of each photon. Since E = hf, each photon has more energy, so after overcoming the work function, the photoelectrons have greater maximum kinetic energy. The number of photoelectrons per second remains unchanged if intensity is constant."
    },
    {
        "id": 82,
        "unit": "photoelectric",
        "q": "What is the wave-particle duality of light?",
        "a": "Light exhibits both wave properties (diffraction, interference, polarisation) and particle properties (photoelectric effect, where light behaves as discrete packets of energy called photons). Neither model alone explains all observations."
    },
    {
        "id": 83,
        "unit": "photoelectric",
        "q": "What is an emission spectrum and what does it tell us?",
        "a": "An emission spectrum consists of bright coloured lines on a dark background. Each element produces a unique emission spectrum. It occurs when excited electrons fall back to lower energy levels, emitting photons of specific frequencies. It can be used to identify elements."
    },
    {
        "id": 84,
        "unit": "photoelectric",
        "q": "What is an absorption spectrum?",
        "a": "An absorption spectrum consists of dark lines on a continuous coloured background. It occurs when atoms absorb photons of specific frequencies, causing electrons to jump to higher energy levels. The dark lines correspond to the same frequencies as the emission spectrum of that element."
    },
    {
        "id": 85,
        "unit": "momentum",
        "q": "A 2 kg ball moving at 3 m·s⁻¹ collides with a stationary 1 kg ball. After collision, the 2 kg ball moves at 1 m·s⁻¹. What is the velocity of the 1 kg ball?",
        "a": "Using conservation of momentum: (2)(3) + (1)(0) = (2)(1) + (1)(v₂). So 6 = 2 + v₂, giving v₂ = 4 m·s⁻¹ in the original direction of motion."
    },
    {
        "id": 86,
        "unit": "work-energy",
        "q": "What is the relationship between work done by friction and thermal energy?",
        "a": "The work done by friction is always negative (opposes motion). The magnitude of work done by friction equals the thermal energy generated: |W_friction| = f_k × d = μ_k × N × d. This energy is transferred as heat to the surfaces and surroundings."
    },
    {
        "id": 87,
        "unit": "rate-equilibrium",
        "q": "What is the effect of increasing the temperature on an exothermic equilibrium reaction?",
        "a": "For an exothermic forward reaction, increasing temperature shifts the equilibrium to the LEFT (towards the endothermic reverse reaction) to absorb the excess heat. The value of Kc decreases."
    },
    {
        "id": 88,
        "unit": "circuits",
        "q": "What is Kirchhoff's voltage law (loop rule)?",
        "a": "The sum of all potential differences (emfs and voltage drops) around any closed loop in a circuit is zero: Σε = ΣIR. The emf of the battery equals the sum of the voltage drops across all resistors in a series loop."
    },
    {
        "id": 89,
        "unit": "electrostatics",
        "q": "Two point charges of +3 μC and −5 μC are 0.2 m apart. Is the force attractive or repulsive, and what is its magnitude?",
        "a": "The force is attractive (opposite charges attract). F = kQ₁Q₂/r² = (9 × 10⁹)(3 × 10⁻⁶)(5 × 10⁻⁶)/(0.2)² = (9 × 10⁹)(15 × 10⁻¹²)/0.04 = 3.375 N."
    },
    {
        "id": 90,
        "unit": "organic",
        "q": "What is a polymer and what is the difference between addition and condensation polymerisation?",
        "a": "A polymer is a large molecule made by joining many small molecules (monomers). Addition polymerisation: monomers with C=C double bonds join without loss of atoms (e.g., polyethylene). Condensation polymerisation: monomers join with the loss of a small molecule like water (e.g., polyesters)."
    }
];

export const quizQuestions: QuizQuestion[] = [
    {
        "id": 1,
        "unit": "momentum",
        "question": "A 5 kg object moves east at 4 m·s⁻¹. What is its momentum?",
        "options": [
            "1.25 kg·m·s⁻¹ east",
            "20 kg·m·s⁻¹ east",
            "20 kg·m·s⁻¹ west",
            "9 kg·m·s⁻¹ east"
        ],
        "correct": 1,
        "explanation": "p = mv = (5)(4) = 20 kg·m·s⁻¹ east. Momentum is a vector in the same direction as velocity."
    },
    {
        "id": 2,
        "unit": "momentum",
        "question": "Which statement about an isolated system is correct?",
        "options": [
            "No forces act on the objects",
            "No external net force acts on the system",
            "No internal forces act between the objects",
            "The system has no friction at all"
        ],
        "correct": 1,
        "explanation": "An isolated system is one on which no external net force acts. Internal forces may exist between the objects within the system."
    },
    {
        "id": 3,
        "unit": "momentum",
        "question": "In a perfectly inelastic collision, which quantity is conserved?",
        "options": [
            "Kinetic energy only",
            "Momentum only",
            "Both kinetic energy and momentum",
            "Neither kinetic energy nor momentum"
        ],
        "correct": 1,
        "explanation": "In all collisions (in an isolated system), momentum is conserved. In a perfectly inelastic collision, kinetic energy is NOT conserved — some is converted to heat, sound, and deformation."
    },
    {
        "id": 4,
        "unit": "momentum",
        "question": "A car's airbag reduces injury during a collision by:",
        "options": [
            "Reducing the change in momentum",
            "Increasing the time over which the momentum changes, reducing the force",
            "Increasing the force on the passenger",
            "Decreasing the mass of the passenger"
        ],
        "correct": 1,
        "explanation": "The airbag increases Δt. Since F = Δp/Δt, for the same Δp, a larger Δt results in a smaller force, reducing injury."
    },
    {
        "id": 5,
        "unit": "projectile",
        "question": "At the maximum height of a ball thrown vertically upward, which statement is true?",
        "options": [
            "Both velocity and acceleration are zero",
            "Velocity is zero but acceleration is 9.8 m·s⁻² downward",
            "Velocity is maximum and acceleration is zero",
            "Both velocity and acceleration are 9.8 m·s⁻² downward"
        ],
        "correct": 1,
        "explanation": "At maximum height, v = 0 but acceleration remains g = 9.8 m·s⁻² downward throughout the entire motion (gravity never stops acting)."
    },
    {
        "id": 6,
        "unit": "projectile",
        "question": "A ball is thrown upward at 20 m·s⁻¹. How long does it take to reach maximum height? (g = 10 m·s⁻²)",
        "options": [
            "1 s",
            "2 s",
            "4 s",
            "10 s"
        ],
        "correct": 1,
        "explanation": "At max height, v_f = 0. Using v_f = v_i + gΔt (taking up as positive): 0 = 20 + (−10)t, so t = 2 s."
    },
    {
        "id": 7,
        "unit": "projectile",
        "question": "On a velocity-time graph for a ball thrown upward and returning, the gradient of the line represents:",
        "options": [
            "Displacement",
            "Speed",
            "Acceleration due to gravity",
            "Momentum"
        ],
        "correct": 2,
        "explanation": "The gradient of a velocity-time graph equals acceleration. For free fall, this is the constant gravitational acceleration (g = 9.8 m·s⁻² downward)."
    },
    {
        "id": 8,
        "unit": "projectile",
        "question": "An object is dropped from a height. Which graph correctly shows its velocity vs time? (Taking downward as positive)",
        "options": [
            "A horizontal line",
            "A straight line with positive gradient starting at v = 0",
            "A parabola",
            "A straight line with negative gradient"
        ],
        "correct": 1,
        "explanation": "An object dropped from rest has v_i = 0 and constant acceleration g downward. With downward positive, the v-t graph is a straight line starting at the origin with a positive gradient equal to g."
    },
    {
        "id": 9,
        "unit": "organic",
        "question": "What is the general formula for alkenes?",
        "options": [
            "CₙH₂ₙ₊₂",
            "CₙH₂ₙ",
            "CₙH₂ₙ₋₂",
            "CₙH₂ₙ₊₁"
        ],
        "correct": 1,
        "explanation": "Alkenes have the general formula CₙH₂ₙ. They are unsaturated hydrocarbons with at least one C=C double bond."
    },
    {
        "id": 10,
        "unit": "organic",
        "question": "Which functional group identifies a carboxylic acid?",
        "options": [
            "–OH",
            "–CHO",
            "–COOH",
            "–CO–"
        ],
        "correct": 2,
        "explanation": "The carboxyl group (–COOH) is the functional group of carboxylic acids. It consists of a carbonyl group (C=O) bonded to a hydroxyl group (–OH)."
    },
    {
        "id": 11,
        "unit": "organic",
        "question": "What type of reaction occurs when ethene reacts with bromine?",
        "options": [
            "Substitution",
            "Addition",
            "Elimination",
            "Esterification"
        ],
        "correct": 1,
        "explanation": "Ethene has a C=C double bond. Bromine adds across the double bond in an addition reaction: CH₂=CH₂ + Br₂ → CH₂BrCHBr (1,2-dibromoethane)."
    },
    {
        "id": 12,
        "unit": "organic",
        "question": "Which of the following pairs are structural isomers?",
        "options": [
            "Ethane and ethene",
            "Butane and 2-methylpropane",
            "Methane and ethane",
            "Propan-1-ol and propanoic acid"
        ],
        "correct": 1,
        "explanation": "Butane and 2-methylpropane both have the molecular formula C₄H₁₀ but different structural arrangements, making them structural isomers."
    },
    {
        "id": 13,
        "unit": "work-energy",
        "question": "A person pushes a box 5 m along a floor with a force of 100 N at 60° to the horizontal. How much work is done?",
        "options": [
            "500 J",
            "250 J",
            "433 J",
            "0 J"
        ],
        "correct": 1,
        "explanation": "W = FΔx·cosθ = (100)(5)cos60° = 500 × 0.5 = 250 J."
    },
    {
        "id": 14,
        "unit": "work-energy",
        "question": "When is the work done on an object zero?",
        "options": [
            "When the force is very large",
            "When the force is perpendicular to the displacement",
            "When the object moves very fast",
            "When friction is present"
        ],
        "correct": 1,
        "explanation": "W = FΔx·cosθ. When θ = 90° (force perpendicular to displacement), cos90° = 0, so W = 0. Example: centripetal force does zero work on an orbiting object."
    },
    {
        "id": 15,
        "unit": "work-energy",
        "question": "A 2 kg ball is dropped from 10 m. What is its speed just before hitting the ground? (No air resistance, g = 10 m·s⁻²)",
        "options": [
            "10 m·s⁻¹",
            "14.1 m·s⁻¹",
            "20 m·s⁻¹",
            "200 m·s⁻¹"
        ],
        "correct": 1,
        "explanation": "Using conservation of energy: mgh = ½mv². v = √(2gh) = √(2 × 10 × 10) = √200 = 14.1 m·s⁻¹."
    },
    {
        "id": 16,
        "unit": "work-energy",
        "question": "A motor lifts a 50 kg mass through 20 m in 10 s. What is the power of the motor? (g = 10 m·s⁻²)",
        "options": [
            "100 W",
            "500 W",
            "1000 W",
            "10 000 W"
        ],
        "correct": 2,
        "explanation": "W = mgh = (50)(10)(20) = 10 000 J. P = W/Δt = 10 000/10 = 1000 W."
    },
    {
        "id": 17,
        "unit": "doppler",
        "question": "An ambulance siren has a frequency of 500 Hz. As the ambulance approaches, the observer hears:",
        "options": [
            "A frequency lower than 500 Hz",
            "A frequency higher than 500 Hz",
            "Exactly 500 Hz",
            "No sound at all"
        ],
        "correct": 1,
        "explanation": "When the source approaches the observer, the wavefronts are compressed, resulting in a shorter wavelength and higher observed frequency."
    },
    {
        "id": 18,
        "unit": "doppler",
        "question": "Red shift in the light from distant galaxies indicates that:",
        "options": [
            "The galaxies are moving toward Earth",
            "The galaxies are stationary",
            "The galaxies are moving away from Earth (universe is expanding)",
            "The light is being reflected"
        ],
        "correct": 2,
        "explanation": "Red shift means the observed wavelength is longer (frequency is lower) than emitted. This occurs when the source moves away from the observer, indicating the universe is expanding."
    },
    {
        "id": 19,
        "unit": "doppler",
        "question": "In the Doppler equation f_L = f_S × (v ± v_L)/(v ∓ v_S), the speed of sound (v) is:",
        "options": [
            "Relative to the source",
            "Relative to the listener",
            "Relative to the medium (air)",
            "Relative to the ground"
        ],
        "correct": 2,
        "explanation": "In the Doppler equation, v represents the speed of sound in the medium (usually air, approximately 340 m·s⁻¹ at 20°C)."
    },
    {
        "id": 20,
        "unit": "doppler",
        "question": "Which property of sound changes due to the Doppler effect?",
        "options": [
            "Speed of sound",
            "Apparent frequency (pitch)",
            "Amplitude",
            "The actual frequency of the source"
        ],
        "correct": 1,
        "explanation": "The Doppler effect changes the apparent (observed) frequency. The actual frequency of the source and the speed of sound in the medium remain unchanged."
    },
    {
        "id": 21,
        "unit": "rate-equilibrium",
        "question": "Increasing the concentration of reactants increases the rate of reaction because:",
        "options": [
            "The activation energy decreases",
            "More particles are present, increasing the frequency of effective collisions",
            "The temperature increases",
            "A catalyst is formed"
        ],
        "correct": 1,
        "explanation": "Higher concentration means more reactant particles per unit volume, so collisions occur more frequently, increasing the number of effective collisions per unit time."
    },
    {
        "id": 22,
        "unit": "rate-equilibrium",
        "question": "A catalyst increases the rate of reaction by:",
        "options": [
            "Increasing the temperature",
            "Increasing the concentration",
            "Providing an alternative pathway with a lower activation energy",
            "Increasing the activation energy"
        ],
        "correct": 2,
        "explanation": "A catalyst provides an alternative reaction pathway with a lower activation energy, so more particles have enough energy for effective collisions."
    },
    {
        "id": 23,
        "unit": "rate-equilibrium",
        "question": "For the equilibrium N₂(g) + 3H₂(g) ⇌ 2NH₃(g) (exothermic), increasing temperature will:",
        "options": [
            "Shift equilibrium to the right, increasing NH₃",
            "Have no effect on equilibrium",
            "Shift equilibrium to the left, decreasing NH₃",
            "Only increase the rate of the forward reaction"
        ],
        "correct": 2,
        "explanation": "The forward reaction is exothermic. Increasing temperature favours the endothermic (reverse) reaction (Le Chatelier's Principle), shifting equilibrium to the left and decreasing NH₃ yield."
    },
    {
        "id": 24,
        "unit": "rate-equilibrium",
        "question": "Adding a catalyst to a system at equilibrium:",
        "options": [
            "Shifts equilibrium to the right",
            "Shifts equilibrium to the left",
            "Does not change the equilibrium position but the system reaches equilibrium faster",
            "Changes the value of Kc"
        ],
        "correct": 2,
        "explanation": "A catalyst speeds up both forward and reverse reactions equally. The equilibrium position and Kc are unchanged, but equilibrium is reached faster."
    },
    {
        "id": 25,
        "unit": "electrostatics",
        "question": "If the distance between two point charges is doubled, the electrostatic force between them:",
        "options": [
            "Doubles",
            "Halves",
            "Becomes one quarter",
            "Quadruples"
        ],
        "correct": 2,
        "explanation": "F = kQ₁Q₂/r². If r is doubled: F_new = kQ₁Q₂/(2r)² = kQ₁Q₂/4r² = F/4. The force becomes one quarter."
    },
    {
        "id": 26,
        "unit": "electrostatics",
        "question": "Electric field lines between two equal positive charges:",
        "options": [
            "Run from one charge to the other",
            "Run outward from both charges, with a neutral point between them",
            "Form concentric circles",
            "Point toward both charges"
        ],
        "correct": 1,
        "explanation": "Field lines point away from positive charges. Between two equal positive charges, the fields oppose each other, creating a neutral point (where E = 0) between them."
    },
    {
        "id": 27,
        "unit": "electrostatics",
        "question": "The SI unit of electric field strength is:",
        "options": [
            "Coulomb (C)",
            "Newton (N)",
            "N·C⁻¹ (or V·m⁻¹)",
            "Joule (J)"
        ],
        "correct": 2,
        "explanation": "Electric field strength E = F/q, so the unit is N/C = N·C⁻¹. It is also equivalent to V·m⁻¹."
    },
    {
        "id": 28,
        "unit": "electrostatics",
        "question": "The work done in moving a +2 μC charge through a potential difference of 500 V is:",
        "options": [
            "250 J",
            "0.001 J",
            "1 × 10⁻³ J",
            "1000 J"
        ],
        "correct": 2,
        "explanation": "W = qV = (2 × 10⁻⁶)(500) = 1 × 10⁻³ J = 0.001 J. Note: options B and C are the same value in different notation."
    },
    {
        "id": 29,
        "unit": "circuits",
        "question": "A battery with emf 12 V and internal resistance 1 Ω is connected to a 5 Ω resistor. What is the current?",
        "options": [
            "2 A",
            "2.4 A",
            "2 A",
            "12 A"
        ],
        "correct": 2,
        "explanation": "I = ε/(R + r) = 12/(5 + 1) = 12/6 = 2 A."
    },
    {
        "id": 30,
        "unit": "circuits",
        "question": "Two 6 Ω resistors are connected in parallel. Their combined resistance is:",
        "options": [
            "12 Ω",
            "6 Ω",
            "3 Ω",
            "0.33 Ω"
        ],
        "correct": 2,
        "explanation": "1/R_total = 1/6 + 1/6 = 2/6 = 1/3. So R_total = 3 Ω. Equal resistors in parallel: R_total = R/n."
    },
    {
        "id": 31,
        "unit": "circuits",
        "question": "The 'lost volts' in a circuit refers to:",
        "options": [
            "The voltage across the external resistance",
            "The voltage drop across the internal resistance of the battery",
            "The emf of the battery",
            "The total voltage in the circuit"
        ],
        "correct": 1,
        "explanation": "'Lost volts' = Ir, the potential difference across the internal resistance. It represents energy dissipated as heat inside the battery."
    },
    {
        "id": 32,
        "unit": "circuits",
        "question": "In a series circuit, which quantity is the same for all components?",
        "options": [
            "Voltage",
            "Resistance",
            "Current",
            "Power"
        ],
        "correct": 2,
        "explanation": "In a series circuit, the same current flows through all components. Voltage divides across the components proportionally to their resistances."
    },
    {
        "id": 33,
        "unit": "electrochemistry",
        "question": "In a galvanic cell, oxidation occurs at the:",
        "options": [
            "Cathode",
            "Anode",
            "Salt bridge",
            "External circuit"
        ],
        "correct": 1,
        "explanation": "In a galvanic cell, oxidation occurs at the anode (negative terminal). Remember: AN OX (anode = oxidation) and RED CAT (reduction = cathode)."
    },
    {
        "id": 34,
        "unit": "electrochemistry",
        "question": "The standard cell potential (E°_cell) of a galvanic cell is calculated by:",
        "options": [
            "E°_anode − E°_cathode",
            "E°_cathode − E°_anode",
            "E°_cathode + E°_anode",
            "E°_cathode × E°_anode"
        ],
        "correct": 1,
        "explanation": "E°_cell = E°_cathode − E°_anode. The half-cell with the more positive reduction potential is the cathode."
    },
    {
        "id": 35,
        "unit": "electrochemistry",
        "question": "In an electrolytic cell, the anode is connected to the:",
        "options": [
            "Negative terminal of the battery",
            "Positive terminal of the battery",
            "Salt bridge",
            "Cathode"
        ],
        "correct": 1,
        "explanation": "In an electrolytic cell, the anode is connected to the positive terminal of the external battery (opposite to a galvanic cell where the anode is the negative terminal)."
    },
    {
        "id": 36,
        "unit": "electrochemistry",
        "question": "What is the function of the salt bridge in a galvanic cell?",
        "options": [
            "To allow electrons to flow between half-cells",
            "To allow ions to flow between half-cells to maintain electrical neutrality",
            "To increase the voltage of the cell",
            "To act as a catalyst"
        ],
        "correct": 1,
        "explanation": "The salt bridge allows ions to migrate between the two half-cells, maintaining electrical neutrality. Without it, charge build-up would stop the reaction."
    },
    {
        "id": 37,
        "unit": "photoelectric",
        "question": "In the photoelectric effect, increasing the frequency of incident light (above f₀) will:",
        "options": [
            "Increase the number of photoelectrons emitted",
            "Increase the maximum kinetic energy of photoelectrons",
            "Decrease the work function",
            "Have no effect on the photoelectrons"
        ],
        "correct": 1,
        "explanation": "Higher frequency means higher photon energy (E = hf). The extra energy above the work function is converted to kinetic energy of the photoelectrons: Ek(max) = hf − W₀."
    },
    {
        "id": 38,
        "unit": "photoelectric",
        "question": "The photoelectric effect provides evidence that light behaves as:",
        "options": [
            "A wave",
            "A particle (photon)",
            "A transverse wave only",
            "A longitudinal wave"
        ],
        "correct": 1,
        "explanation": "The photoelectric effect can only be explained by treating light as particles (photons) with energy E = hf. The wave model cannot explain why there is a threshold frequency or why Ek depends on frequency, not intensity."
    },
    {
        "id": 39,
        "unit": "photoelectric",
        "question": "An element's emission spectrum consists of:",
        "options": [
            "A continuous band of colours",
            "Bright coloured lines on a dark background",
            "Dark lines on a continuous coloured background",
            "A single colour of light"
        ],
        "correct": 1,
        "explanation": "An emission spectrum shows bright coloured lines on a dark background. Each line corresponds to a specific photon energy/frequency emitted when electrons drop from higher to lower energy levels."
    },
    {
        "id": 40,
        "unit": "photoelectric",
        "question": "Light with frequency below the threshold frequency shines on a metal. What happens?",
        "options": [
            "Electrons are emitted slowly",
            "Electrons are emitted with low kinetic energy",
            "No electrons are emitted regardless of the light intensity",
            "The metal heats up and eventually emits electrons"
        ],
        "correct": 2,
        "explanation": "If f < f₀, each photon has insufficient energy (E < W₀) to eject an electron. Increasing intensity only increases the number of low-energy photons — it cannot eject electrons. This is a key result that disproves the wave model."
    }
];

export const feynmanTopics: FeynmanTopic[] = [
    {
        "id": "f1",
        "title": "Momentum and Impulse",
        "prompt": "Explain momentum and impulse.",
        "keyConcepts": [
            "Momentum p = mv is a vector quantity (direction matters)",
            "Newton's Second Law in terms of momentum: F_net = Δp/Δt",
            "Impulse J = F_net·Δt = Δp = m(v_f − v_i)",
            "Law of Conservation of Momentum: Σp_before = Σp_after in an isolated system",
            "Elastic collisions conserve both momentum and kinetic energy; inelastic collisions conserve only momentum",
            "Increasing collision time (airbags, crumple zones) decreases the force for the same impulse"
        ],
        "examTip": "Always define a positive direction before calculations. Use the sign convention consistently for all velocities. Examiners frequently ask why safety devices reduce injury — link to F = Δp/Δt."
    },
    {
        "id": "f2",
        "title": "Vertical Projectile Motion",
        "prompt": "Explain vertical projectile motion.",
        "keyConcepts": [
            "Object moves under gravitational acceleration only: g = 9.8 m·s⁻² downward",
            "At maximum height, velocity = 0 but acceleration is still g (gravity never stops)",
            "Three equations of motion: v_f = v_i + gΔt, Δy = v_iΔt + ½g(Δt)², v_f² = v_i² + 2gΔy",
            "For objects thrown up and returning: t_up = t_down, speed at launch = speed on return",
            "Position-time graph is a parabola; velocity-time graph is a straight line; acceleration-time graph is horizontal at g",
            "Area under v-t graph gives displacement; gradient of v-t graph gives acceleration"
        ],
        "examTip": "Be careful with signs: choose up as positive or down as positive and stick with it. At the top, v = 0 but a is NOT zero — this is a common trick question."
    },
    {
        "id": "f3",
        "title": "Organic Chemistry",
        "prompt": "Explain organic chemistry.",
        "keyConcepts": [
            "Homologous series members have the same general formula and functional group, differing by –CH₂–",
            "IUPAC naming: find longest chain with functional group, number to give lowest locant, name substituents",
            "Structural isomers: same molecular formula, different structural arrangement",
            "Addition reactions: across C=C double bonds (unsaturated → saturated)",
            "Substitution reactions: atom/group replaced (typical of alkanes, requires UV light or catalyst)",
            "Elimination reactions: removal of atoms to form double bond (e.g., dehydration of alcohols)",
            "Esterification: carboxylic acid + alcohol → ester + water (acid catalyst needed)"
        ],
        "examTip": "Know the difference between addition, substitution, and elimination reactions and which homologous series each applies to. Draw full structural formulae unless condensed is specified. Name systematic organic compounds correctly — this is a reliable source of marks."
    },
    {
        "id": "f4",
        "title": "Work, Energy and Power",
        "prompt": "Explain work, energy and power.",
        "keyConcepts": [
            "Work W = FΔx·cosθ — only the component of force in the direction of displacement does work",
            "Positive work (same direction), negative work (opposite direction), zero work (perpendicular)",
            "Work-energy theorem: W_net = ΔEk = ½mv_f² − ½mv_i²",
            "Conservation of mechanical energy (no friction): Ek₁ + Ep₁ = Ek₂ + Ep₂",
            "When non-conservative forces act: W_nc = ΔEk + ΔEp",
            "Power P = W/Δt = Fv, measured in watts (W)"
        ],
        "examTip": "The most common error is forgetting to include cosθ in the work formula. Remember: normal force does zero work on a horizontal surface. When friction is present, use W_nc = ΔEk + ΔEp rather than conservation of energy."
    },
    {
        "id": "f5",
        "title": "Doppler Effect",
        "prompt": "Explain doppler effect.",
        "keyConcepts": [
            "Apparent change in frequency due to relative motion between source and observer",
            "Source approaching: higher frequency (shorter wavelength); receding: lower frequency (longer wavelength)",
            "Formula: f_L = f_S × (v ± v_L)/(v ∓ v_S)",
            "Upper signs for approaching, lower signs for receding",
            "Red shift: light from galaxies moving away (longer wavelength) — evidence for expanding universe",
            "Blue shift: light from sources moving toward observer (shorter wavelength)",
            "Applications: speed traps, ultrasound, weather radar, astronomy"
        ],
        "examTip": "The Doppler formula is on the data sheet — focus on choosing the correct signs. Remember: the actual source frequency and speed of sound do NOT change. Red shift questions often link to cosmology — mention Hubble's observation that distant galaxies have greater red shifts."
    },
    {
        "id": "f6",
        "title": "Rate of Reaction and Chemical Equilibrium",
        "prompt": "Explain rate of reaction and chemical equilibrium.",
        "keyConcepts": [
            "Rate = Δ[concentration]/Δt — factors: concentration, temperature, surface area, catalyst, nature of reactants",
            "Collision theory: effective collisions require sufficient energy (≥ Ea) and correct orientation",
            "Catalyst lowers Ea by providing alternative pathway — does not shift equilibrium",
            "Equilibrium: dynamic state where forward rate = reverse rate; concentrations constant but not equal",
            "Kc = [products]^n/[reactants]^m — large Kc favours products, small Kc favours reactants",
            "Le Chatelier's Principle: system shifts to oppose the change (concentration, pressure, temperature)",
            "Temperature change is the ONLY factor that changes the value of Kc"
        ],
        "examTip": "Know the difference between rate and equilibrium. A catalyst does NOT shift equilibrium or change Kc. When asked about temperature and equilibrium, always state whether the forward reaction is exothermic or endothermic. For Kc expressions, remember that pure solids and pure liquids are NOT included."
    },
    {
        "id": "f7",
        "title": "Electrostatics",
        "prompt": "Explain electrostatics.",
        "keyConcepts": [
            "Coulomb's Law: F = kQ₁Q₂/r² (inverse square law), k = 9 × 10⁹ N·m²·C⁻²",
            "Like charges repel, unlike charges attract",
            "Electric field E = F/q = kQ/r² (N·C⁻¹), field lines: away from +, toward −",
            "Potential difference V = W/q (1 V = 1 J·C⁻¹)",
            "Uniform electric field between parallel plates: E = V/d",
            "Superposition: net field at a point is the vector sum of individual fields"
        ],
        "examTip": "Coulomb's Law gives force magnitude — state whether it is attractive or repulsive separately. When finding the net electric field at a point, draw a diagram showing the direction of each field before adding. Convert microcoulombs (μC) to coulombs (× 10⁻⁶) before substituting."
    },
    {
        "id": "f8",
        "title": "Electric Circuits",
        "prompt": "Explain electric circuits.",
        "keyConcepts": [
            "emf (ε) = total energy per unit charge supplied by the battery",
            "Internal resistance (r) causes 'lost volts': ε = V_terminal + Ir = I(R_ext + r)",
            "Ohm's Law: V = IR (at constant temperature)",
            "Series: R_total = R₁ + R₂ + ..., same current through all",
            "Parallel: 1/R_total = 1/R₁ + 1/R₂ + ..., same voltage across all",
            "Power: P = VI = I²R = V²/R; Energy: E = Pt = VIt"
        ],
        "examTip": "Many students forget internal resistance in calculations — always use ε = I(R + r) rather than V = IR for the whole circuit. When a switch opens/closes and changes the circuit configuration, recalculate the total external resistance first, then the current."
    },
    {
        "id": "f9",
        "title": "Electrochemistry",
        "prompt": "Explain electrochemistry.",
        "keyConcepts": [
            "Galvanic cell: spontaneous reaction → electrical energy; anode (−) = oxidation, cathode (+) = reduction",
            "Electrolytic cell: electrical energy → non-spontaneous reaction; anode (+), cathode (−)",
            "E°_cell = E°_cathode − E°_anode (using standard reduction potentials)",
            "Salt bridge maintains electrical neutrality and completes the internal circuit",
            "Standard conditions: 1 mol·dm⁻³ solutions, 25°C, 1 atm, measured against SHE (0.00 V)",
            "Higher on the table = stronger reducing agent (more easily oxidised, acts as anode)",
            "Lower on the table = stronger oxidising agent (more easily reduced, acts as cathode)"
        ],
        "examTip": "Remember AN OX and RED CAT. In a galvanic cell, the anode is negative; in an electrolytic cell, the anode is positive — this is a favourite exam distinction. When writing half-reactions, the table gives reduction half-reactions; reverse the anode half-reaction for oxidation."
    },
    {
        "id": "f10",
        "title": "Photoelectric Effect and Emission Spectra",
        "prompt": "Explain photoelectric effect and emission spectra.",
        "keyConcepts": [
            "Photoelectric effect: electrons emitted when light frequency ≥ threshold frequency (f₀)",
            "Work function W₀ = hf₀ = minimum energy to eject an electron from the metal surface",
            "Photoelectric equation: E_photon = W₀ + Ek(max), i.e., hf = hf₀ + ½mv²_max",
            "Increasing intensity increases number of photoelectrons (current) but NOT their max kinetic energy",
            "Increasing frequency increases max Ek of photoelectrons but not the number (at constant intensity)",
            "Emission spectrum: bright lines on dark background (unique to each element)",
            "Absorption spectrum: dark lines on continuous background (at same frequencies as emission)"
        ],
        "examTip": "The photoelectric effect proves the particle nature of light — the wave model cannot explain the threshold frequency or why Ek depends on frequency, not intensity. Graph questions often plot Ek(max) vs frequency: the gradient is Planck's constant (h) and the y-intercept is −W₀."
    }
];
