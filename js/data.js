/**
 * BiSKY Team — Central Data Store
 * Real data sourced from the official BiSKY Team website (biskyteam.com)
 */

const BISKY = {
  team: {
    name: 'BiSKY Team',
    tagline: 'Reaching beyond the sky',
    mission: 'Desarrollar lanzadores espaciales suborbitales capaces de alcanzar los 100 km de altura para transportar microexperimentos o cubesats.',
    university: 'Universidad del País Vasco / Euskal Herriko Unibertsitatea',
    universityShort: 'UPV/EHU',
    founded: 2019,
    location: 'Bilbao, País Vasco',
    description: 'BiSKY Team es el equipo de cohetería de la UPV/EHU. Diseñamos, construimos y lanzamos cohetes suborbitales utilizando tecnología de propulsión híbrida. Formamos la próxima generación de científicos e ingenieros espaciales.',
    descriptionLong: 'BiSKY Team desarrolla lanzadores espaciales suborbitales con el objetivo de alcanzar 100 km de altura. Utilizamos tecnología de propulsión híbrida — oxidante líquido combinado con combustible sólido — una solución más segura que permite reencendido y recuperación. Seguimos dos líneas de investigación: cohetes de combustión sólida para pruebas electrónicas y bancos de ensayo para tecnología híbrida.',
    email: 'contact@biskyteam.com',
    social: {
      instagram: 'https://www.instagram.com/bisky_team/',
      linkedin: 'https://www.linkedin.com/company/bisky-team/',
      youtube: '#',
      github: '#'
    }
  },

  departments: [
    { id: 'aerostructure', name: 'Aerostructure', icon: '◈' },
    { id: 'avionics', name: 'Avionics', icon: '⊡' },
    { id: 'propulsion', name: 'Propulsion', icon: '⊘' },
    { id: 'recovery', name: 'Recovery', icon: '⊙' },
    { id: 'manufacturing', name: 'Manufacturing', icon: '⊞' },
    { id: 'business', name: 'Business & Legal', icon: '◇' },
    { id: 'board', name: 'Board / Management', icon: '⊕' },
    { id: 'logistics', name: 'Logistics', icon: '⊗' },
    { id: 'pr', name: 'PR & Communication', icon: '◎' },
    { id: 'structure', name: 'Structure', icon: '⊞' },
    { id: 'aerodynamics-recovery', name: 'Aerodynamics & Recovery', icon: '◈' },
    { id: 'flight-control', name: 'Flight Control & Simulation', icon: '⊡' },
    { id: 'business-management', name: 'Business & Management', icon: '◇' },
    { id: 'operations', name: 'Operations', icon: '⊕' }
  ],

  positions: [
    { id: 'faculty', name: 'Faculty Advisor', order: 0 },
    { id: 'team-leader', name: 'Team Leader', order: 1 },
    { id: 'financial-manager', name: 'Financial Manager', order: 2 },
    { id: 'project-manager', name: 'Project Manager', order: 3 },
    { id: 'chief', name: 'Chief', order: 4 },
    { id: 'technical', name: 'Technical', order: 5 },
    { id: 'member', name: 'Team Member', order: 6 }
  ],

  // Academic years using start year: "25-26" => key "2526"
  years: ['25-26', '24-25', '23-24', '22-23', '21-22', '19-20'],

  yearLabels: {
    '25-26': { label: 'Temporada 2025–2026', title: 'Team 25-26' },
    '24-25': { label: 'Temporada 2024–2025', title: 'Team 24-25' },
    '23-24': { label: 'Temporada 2023–2024', title: 'Team 23-24' },
    '22-23': { label: 'Temporada 2022–2023', title: 'Team 22-23' },
    '21-22': { label: 'Temporada 2021–2022', title: 'Team 21-22' },
    '19-20': { label: 'Temporada 2019–2020', title: 'Team 19-20' }
  },

  /**
   * Members organized by year.
   * Each member entry: { name, position, department, project? }
   * For leadership: department = 'leadership'
   */
  membersByYear: {
    '25-26': {
      faculty: [
        { name: 'Gontzal López Ruiz', position: 'faculty', department: 'leadership' },
        { name: 'Ion Agirre Arisketa', position: 'faculty', department: 'leadership' },
        { name: 'Maria Asuncion Ilarramendi Leturia', position: 'faculty', department: 'leadership' },
        { name: 'Pedro Luis Arias', position: 'faculty', department: 'leadership' },
        { name: 'Victor Petuya Arcocha', position: 'faculty', department: 'leadership' }
      ],
      leadership: [
        { name: 'Jimena Isabel del Río Rodrigálvarez', position: 'team-leader', department: 'leadership' },
        { name: 'Ander Arroyo Kremer', position: 'financial-manager', department: 'leadership' }
      ],
      projectManagers: [
        { name: 'Iñigo Martínez Peña', position: 'project-manager', department: 'leadership', project: 'Valkyrie' },
        { name: 'Josu del Río Berasategui', position: 'project-manager', department: 'leadership', project: 'Tracker' },
        { name: 'Mario Casquete De la Puente', position: 'project-manager', department: 'leadership', project: 'Pressure Vessel' },
        { name: 'Mikel Elustondo Mancisidor', position: 'project-manager', department: 'leadership', project: 'Orion' },
        { name: 'Nerea Garmendia López de Robles', position: 'project-manager', department: 'leadership', project: 'Delta' },
        { name: 'Unai Ruiz González', position: 'project-manager', department: 'leadership', project: 'Vulture' },
        { name: 'Xabier Millan Cavadas', position: 'project-manager', department: 'leadership', project: 'Galileo' }
      ],
      departments: {
        'Aerostructure': {
          chief: 'Erik Rojas Uribe-Echebarría',
          members: ['Anne Cuevas Molinos', 'Asier Salgado Rueda', 'Adrian Robledo', 'Alexander Perez Garcia', 'Diego Benitez Arosa', 'Maialen Davis Santiago', 'Patxi Gutiérrez-Barkin', 'Uxue Martitegi Elgezabal', 'Xabier Ruiz de Azua Perez', 'Xabier Martínez Guevara']
        },
        'Avionics & Propulsion': {
          chief: 'Iñigo Martínez Peña',
          members: ['Aitor Agüeros de Vicente', 'Andoni Vázquez Arza', 'Daniel Vélez Rodríguez', 'Gonzalo De Pablo Fernández', 'Leire Aresti Guijo', 'Lorea Jauregi Ortega', 'Marco Lartategui Ugarte', 'Omar Alonso Quinto', 'Ulises Gutiérrez García', 'Victor de Trigo', 'Victor Llosa Lorenzo', 'Iván Lorenzo Romero', 'Markel Corchado Barbero', 'Leire García Goyoaga', 'Unai Ruiz González', 'Mikel Elustondo Mancisidor']
        },
        'Business & Legal': {
          chief: 'Telmo Ubieta Urrutia',
          members: ['Elska García Mateos', 'Gonzalo de Maguregui Sánchez', 'Nerea Loriaux Tejón']
        },
        'Manufacturing': {
          chief: 'Hernán Marcos Serna',
          members: ['Jimena Isabel del Río Rodrigálvarez', 'Josu del Río Berasategui', 'Juan Bilbao Pazos', 'Aritz de la Pinta Morales', 'Gabriel Gutierrez Portal', 'Leire Gómez Asporosa', 'Lucas Radu', 'Martín Molinero Fontecha', 'Nerea Loriaux Tejón', 'Usune Porter']
        },
        'Recovery': {
          chief: 'Jon Ander Sánchez Hernández',
          members: ['Eneko González Hernández', 'Jon Andoni Esteban Arenas', 'Jon Urizar Duñabeitia', 'Alexander Lejarza Candina', 'Endika Reina Velasco', 'Imanol Cornejo Fernandez', 'Jose Alfonso Merino Viso', 'Martina Olmos Murcia', 'Mikel Laclau', 'Paula Pérez Domínguez', 'Raúl Marcos Sáenz del Burgo', 'Unai Gómez Asporosa']
        },
        'Board / Management': {
          chief: 'Maider Tejada Ruiz de Alegría',
          members: ['Ander Arroyo Kremer', 'Nerea Garmendia López de Robles', 'Álvaro de Celis Río', 'Borja Montero Algorta', 'Gilberto Riloha Ritope']
        },
        'Logistics': {
          chief: 'Asier López Barrio',
          members: ['Gonzalo de Maguregui Sánchez', 'Gorka Grijalba Barrañana', 'Lara Sarasola', 'Marta Gómez Fueyo', 'Pablo Enrique Sanchez']
        },
        'PR & Communication': {
          chief: 'Carla Rae Piercey Gonzalez',
          members: ['Ander Corral Marauri', 'Mario Casquete De la Puente', 'Xabier Millan Cavadas', 'Leire Rodrigo Hernando', 'Marta Gómez Fueyo', 'Mikel Etxebarria Arluzea']
        }
      }
    },

    '24-25': {
      faculty: [
        { name: 'Pedro Luis Arias', position: 'faculty', department: 'leadership' },
        { name: 'Victor Petuya Arcocha', position: 'faculty', department: 'leadership' },
        { name: 'Mª Asunción Illarramendi', position: 'faculty', department: 'leadership' }
      ],
      leadership: [
        { name: 'Unai Gómez Asporosa', position: 'team-leader', department: 'leadership' }
      ],
      projectManagers: [
        { name: 'Xabier Millan Cavadas', position: 'project-manager', department: 'leadership', project: 'Launch Rail' },
        { name: 'Ander Arroyo Kremer', position: 'project-manager', department: 'leadership', project: 'Financial' },
        { name: 'Jimena Isabel del Río Rodrigálvarez', position: 'project-manager', department: 'leadership', project: 'Tracker' },
        { name: 'Mikel Elustondo Mancisidor', position: 'project-manager', department: 'leadership', project: 'Orion' },
        { name: 'Iñigo Martínez Peña', position: 'project-manager', department: 'leadership', project: 'Valkyrie' },
        { name: 'Mario Casquete De la Puente', position: 'project-manager', department: 'leadership', project: 'Tanque M2' },
        { name: 'Xabier Martínez Guevara', position: 'project-manager', department: 'leadership', project: 'EROS' }
      ],
      departments: {
        'Business & Management': {
          chief: 'Juan Bilbao Pazos',
          members: ['Imanol Cornejo Fernandez', 'Telmo Ubieta Urrutia']
        },
        'Avionics': {
          chief: 'Mikel Elustondo Mancisidor',
          members: ['Imanol Martínez Macho', 'Leire García Goyoaga', 'Iñigo Martínez Peña']
        },
        'Propulsion': {
          chief: 'Markel Perona Guerra',
          members: ['Unai Ruiz González', 'Omar Alonso Quinto', 'Markel Corchado Barbero', 'Iván Lorenzo Romero', 'Leire Aresti Guijo']
        },
        'Structure': {
          chief: 'Xabier Millan Cavadas',
          members: ['Jon Ander Sánchez Hernández', 'Irune Hoz Bregel']
        },
        'Aerodynamics & Recovery': {
          chief: 'Jon Andoni Esteban Arenas',
          members: ['Jon Urizar Duñabeitia', 'Borja Jimeno Soto']
        },
        'Flight Control & Simulation': {
          chief: 'Jimena Isabel del Río Rodrigálvarez',
          members: ['Eneko González Hernández']
        }
      }
    },

    '23-24': {
      faculty: [
        { name: 'Pedro Luis Arias', position: 'faculty', department: 'leadership' },
        { name: 'Victor Petuya Arcocha', position: 'faculty', department: 'leadership' },
        { name: 'Mª Asunción Illarramendi', position: 'faculty', department: 'leadership' }
      ],
      leadership: [
        { name: 'Aitor Barrena Blanco', position: 'team-leader', department: 'leadership' }
      ],
      projectManagers: [
        { name: 'Xabier Millan Cavadas', position: 'project-manager', department: 'leadership', project: 'Launch Rail' },
        { name: 'Unai Gómez Asporosa', position: 'project-manager', department: 'leadership', project: 'M2' },
        { name: 'Ander Arroyo Kremer', position: 'project-manager', department: 'leadership', project: 'Hermes' }
      ],
      departments: {
        'Business': {
          chief: 'Laura Alonso',
          members: ['Juan Bilbao Pazos', 'Imanol Cornejo Fernandez']
        },
        'Avionics': {
          chief: 'Mikel Elustondo Mancisidor',
          members: ['Iñigo Martínez Peña', 'Borja Jimeno Soto']
        },
        'Propulsion': {
          chief: 'Jon Andoni Esteban Arenas',
          members: ['Markel Perona Guerra', 'Unai Ruiz González']
        },
        'Structure': {
          chief: 'Xabier Millan Cavadas',
          members: ['Jon Ander Sánchez Hernández']
        },
        'Aerodynamics & Recovery': {
          chief: null,
          members: ['Jimena Isabel del Río Rodrigálvarez', 'Irune Hoz Bregel']
        },
        'Flight Control & Simulation': {
          chief: null,
          members: ['Eneko González Hernández']
        }
      }
    },

    '22-23': {
      faculty: [
        { name: 'Pedro Luis Arias', position: 'faculty', department: 'leadership' },
        { name: 'Victor Petuya Arcocha', position: 'faculty', department: 'leadership' },
        { name: 'Mª Asunción Illarramendi', position: 'faculty', department: 'leadership' }
      ],
      leadership: [
        { name: 'Jon Pérez Bozal', position: 'team-leader', department: 'leadership' }
      ],
      projectManagers: [],
      departments: {
        'Business': {
          chief: 'Marta Guinea',
          members: ['Imanol Cornejo Fernandez', 'Juan Bilbao Pazos', 'Laura Alonso']
        },
        'Avionics': {
          chief: 'Aitor Barrena Blanco',
          members: ['Unai Ruiz González', 'Mikel Elustondo Mancisidor', 'Borja Jimeno Soto']
        },
        'Propulsion': {
          chief: null,
          members: ['Jon Andoni Esteban Arenas', 'Unai Gómez Asporosa', 'Xabier Millan Cavadas']
        },
        'Structure': {
          chief: null,
          members: ['Ander Arroyo Kremer', 'Jon Ander Sánchez Hernández']
        }
      }
    },

    '21-22': {
      faculty: [
        { name: 'Pedro Luis Arias', position: 'faculty', department: 'leadership' },
        { name: 'Víctor Petuya', position: 'faculty', department: 'leadership' },
        { name: 'Mª Asunción Illarramendi', position: 'faculty', department: 'leadership' },
        { name: 'Hegoi Amestoy', position: 'faculty', department: 'leadership' }
      ],
      leadership: [
        { name: 'Jon Pérez Bozal', position: 'team-leader', department: 'leadership' }
      ],
      projectManagers: [
        { name: 'Ignacio Amundarain', position: 'project-manager', department: 'leadership', project: 'Charlie' },
        { name: 'Daniel Pérez', position: 'project-manager', department: 'leadership', project: 'M2' }
      ],
      departments: {
        'Business & Management': {
          chief: null,
          members: ['Marta Guinea', 'Joseba Iparraguirre']
        },
        'Avionics': {
          chief: null,
          members: ['Aitor Barrena Blanco', 'Jon Pérez Bozal']
        },
        'Propulsion': {
          chief: null,
          members: ['Daniel Pérez', 'Ignacio Amundarain']
        },
        'Structure': {
          chief: null,
          members: ['Ander Arroyo Kremer']
        },
        'Aerodynamics & Recovery': {
          chief: null,
          members: ['Unai Gómez Asporosa']
        }
      }
    },

    '19-20': {
      faculty: [
        { name: 'Pedro Luis Arias', position: 'faculty', department: 'leadership' },
        { name: 'Victor Petuya', position: 'faculty', department: 'leadership' },
        { name: 'Mª Asunción Illarramendi', position: 'faculty', department: 'leadership' },
        { name: 'Hegoi Amestoy', position: 'faculty', department: 'leadership' }
      ],
      leadership: [
        { name: 'Maria Carrillo', position: 'team-leader', department: 'leadership' }
      ],
      projectManagers: [
        { name: 'Javier Garibi', position: 'project-manager', department: 'leadership', project: 'Charlie' },
        { name: 'Ana Ruiz', position: 'project-manager', department: 'leadership', project: 'M2' },
        { name: 'Xabier Idiondo', position: 'project-manager', department: 'leadership', project: 'Arima & Saiakera' }
      ],
      departments: {
        'Business & Management': {
          chief: 'Joseba Iparraguirre',
          members: ['Jon Pérez Bozal']
        },
        'Avionics': {
          chief: null,
          members: ['Laura Burgos', 'Andreea Stanciu', 'Iñigo Bouzas']
        },
        'Propulsion': {
          chief: null,
          members: ['Javier Garibi', 'Ana Ruiz']
        },
        'Structure': {
          chief: null,
          members: ['Xabier Idiondo']
        },
        'Aerodynamics & Recovery': {
          chief: null,
          members: ['Maria Carrillo']
        },
        'Flight Control & Simulation': {
          chief: null,
          members: ['Mikel Montoya']
        }
      }
    }
  },

  /**
   * Photo mapping for members with photos in assets/members/
   * Key: display name, Value: filename (without path)
   */
  memberPhotos: {
    'Adrian Robledo': 'Adrian Robledo.jpg',
    'Aitor Agüeros de Vicente': 'Aitor Agüeros de Vicente.jpg',
    'Aitor Barrena Blanco': 'Aitor Barrena Blanco.jpg',
    'Alexander Lejarza Candina': 'Alexander Lejarza Candina.jpg',
    'Alexander Perez Garcia': 'Alexander Perez Garcia.jpg',
    'Ander Arroyo Kremer': 'Ander Arroyo Kremer.jpg',
    'Ander Corral Marauri': 'Ander Corral Marauri.jpg',
    'Andoni Vázquez Arza': 'Andoni Vázquez Arza.jpg',
    'Anne Cuevas Molinos': 'Anne Cueves Molinos.jpg',
    'Aritz de la Pinta Morales': 'Aritz de la Pinta Morales.jpg',
    'Asier López Barrio': 'Asier López Barrio.jpg',
    'Asier Salgado Rueda': 'Asier Salgado Rueda.jpg',
    'Álvaro de Celis Río': 'Álvaro de Celis Río.jpg',
    'Borja Jimeno Soto': 'Borja Jimeno Soto.jpg',
    'Borja Montero Algorta': 'Borja Montero Algorta.jpg',
    'Carla Rae Piercey Gonzalez': 'Carla Rae Piercey Gonzalez.jpg',
    'Daniel Vélez Rodríguez': 'Daniel Vélez Rodríguez.jpg',
    'Diego Benitez Arosa': 'Diego Benitez Arosa.jpg',
    'Diego Yannick Fonseca Alvarez': 'Diego Yannick Fonseca Alvarez.jpg',
    'Elska García Mateos': 'Elska García Mateos.jpg',
    'Endika Reina Velasco': 'Endika Reina Velasco.jpg',
    'Eneko González Hernández': 'Eneko González Hernández.jpg',
    'Erik Rojas Uribe-Echebarría': 'Erik Rojas Uribe-Echebarría.jpg',
    'Gabriel Gutierrez Portal': 'Gabriel Gutierrez Portal.jpg',
    'Gilberto Riloha Ritope': 'Gilberto Riloha Ritope.jpg',
    'Gontzal López Ruiz': 'Gontzal López Ruiz.jpg',
    'Gonzalo De Pablo Fernández': 'Gonzalo De Pablo Fernández.jpg',
    'Gonzalo de Maguregui Sánchez': 'Gonzalo de Maguregui Sánchez.jpg',
    'Gorka Grijalba Barrañana': 'Gorka Grijalba Barrañana.jpg',
    'Hernán Marcos Serna': 'Hernán Marcos Serna.jpg',
    'Imanol Cornejo Fernandez': 'Imanol Cornejo Fernandez.jpg',
    'Imanol Martínez Macho': 'Imanol Martínez Macho.jpg',
    'Iñigo Martínez Peña': 'Iñigo Martínez Peña.jpg',
    'Ion Agirre Arisketa': 'Ion Agirre Arisketa.jpg',
    'Irune Hoz Bregel': 'Irune Hoz Bregel.jpg',
    'Iván Lorenzo Romero': 'Ivan Lorenzo Romero.jpg',
    'Jimena Isabel del Río Rodrigálvarez': 'Jimena Isabel del Río Rodrigálvarez.jpg',
    'Jon Ander Sánchez Hernández': 'Jon Ander Sánchez Hernández.jpg',
    'Jon Andoni Esteban Arenas': 'Jon Andoni Esteban Arenas.jpg',
    'Jon Urizar Duñabeitia': 'Jon Urizar Duñabeitia.jpg',
    'Jose Alfonso Merino Viso': 'Jose Alfonso Merino Viso.jpg',
    'Josu del Río Berasategui': 'Josu del Río Berasategui.jpg',
    'Juan Bilbao Pazos': 'Juan Bilbao Pazos.jpg',
    'Lara Sarasola': 'Lara Sarasola.jpg',
    'Leire Aresti Guijo': 'Leire Aresti Guijo.jpg',
    'Leire García Goyoaga': 'Leire Garcia Goyoaga.jpg',
    'Leire Gómez Asporosa': 'Leire Gómez Asporosa.jpg',
    'Leire Rodrigo Hernando': 'Leire Rodrigo Hernando.jpg',
    'Lorea Jauregi Ortega': 'Lorea Jauregi Ortega.jpg',
    'Lucas Radu': 'Lucas Radu.jpg',
    'Maialen Davis Santiago': 'Maialen Davis Santiago.jpg',
    'Maider Tejada Ruiz de Alegría': 'Maider Tejada Ruiz de Alegría.jpg',
    'Marco Lartategui Ugarte': 'Marco Lartategui Ugarte.jpg',
    'Maria Asuncion Ilarramendi Leturia': 'Maria Asuncion Ilarramendi Leturia.jpg',
    'Mario Casquete De la Puente': 'Mario Casquete De la Puente.jpg',
    'Markel Corchado Barbero': 'Markel Corchado Barbero.jpg',
    'Markel Perona Guerra': 'Markel Perona Guerra.jpg',
    'Marta Gómez Fueyo': 'Marta Gómez Fueyo.jpg',
    'Martina Olmos Murcia': 'Martina Olmos Murcia.jpg',
    'Martín Molinero Fontecha': 'Martín Molinero Fontecha.jpg',
    'Mikel Elustondo Mancisidor': 'Mikel Elustondo Mancisidor.jpg',
    'Mikel Etxebarria Arluzea': 'Mikel Etxebarria Arluzea.jpg',
    'Mikel Laclau': 'Mikel Laclau.jpg',
    'Nerea Garmendia López de Robles': 'Nerea Garmendia López de Robles.jpg',
    'Nerea Loriaux Tejón': 'Nerea Loriaux Tejón.jpg',
    'Omar Alonso Quinto': 'Omar Alonso Quinto.jpg',
    'Pablo Enrique Sanchez': 'Pablo Enrique Sanchez.jpg',
    'Patxi Gutiérrez-Barkin': 'Patxi Gutiérrez-Barkin.jpg',
    'Paula Pérez Domínguez': 'Paula Pérez Domínguez.jpg',
    'Raúl Marcos Sáenz del Burgo': 'Raúl Marcos Sáenz del Burgo.jpg',
    'Telmo Ubieta Urrutia': 'Telmo Ubieta Urrutia.jpg',
    'Ulises Gutiérrez García': 'Ulises Gutiérrez García.jpg',
    'Unai Gómez Asporosa': 'Unai Gómez Asporosa.jpg',
    'Unai Ruiz González': 'Unai Ruiz González.jpg',
    'Usune Porter': 'Usune Porter.jpg',
    'Uxue Martitegi Elgezabal': 'Uxue Martitegi Elgezabal.jpg',
    'Victor Llosa Lorenzo': 'Victor Llosa Lorenzo.jpg',
    'Victor Petuya Arcocha': 'Victor Petuya Arcocha.jpg',
    'Victor de Trigo': 'Victor de Trigo.jpg',
    'Xabier Martínez Guevara': 'Xabier Martínez Guevara.jpg',
    'Xabier Millan Cavadas': 'Xabier Millan Cavadas.jpg',
    'Xabier Ruiz de Azua Perez': 'Xabier Ruiz de Azua Perez.jpg'
  },

  projects: {
    rockets: [
      {
        id: 'hermes', name: 'Hermes', category: 'rockets',
        status: 'Completado', tagline: 'Cohete de combustible sólido para pruebas electrónicas EROS',
        description: 'Hermes es un cohete de combustible sólido diseñado para probar y validar el sistema electrónico EROS desarrollado internamente por el equipo. Permitió verificar los sistemas de telemetría y control de vuelo en condiciones reales de lanzamiento.',
        specs: { propulsion: 'Sólida', mission: 'Test electronics EROS' },
        image: null
      },
      {
        id: 'charlie', name: 'Charlie', category: 'rockets',
        status: 'Completado', tagline: 'Primer cohete en volar con electrónica EROS propia',
        description: 'Charlie fue el primer cohete del equipo en incorporar la aviónica EROS de diseño propio en un vuelo real. Este hito representó la integración completa entre el departamento de propulsión y aviónica del equipo.',
        specs: { propulsion: 'Sólida', mission: 'First flight with in-house EROS electronics' },
        image: null
      },
      {
        id: 'atlas', name: 'Atlas', category: 'rockets',
        status: 'Completado', tagline: 'Pruebas de recuperación con paracaídas',
        description: 'Atlas se diseñó específicamente para probar el sistema de recuperación con paracaídas del equipo. Su lanzamiento permitió validar los mecanismos de despliegue y la secuencia de eventos de recuperación en vuelo real.',
        specs: { propulsion: 'Sólida', mission: 'Parachute recovery test' },
        image: null
      },
      {
        id: 'io', name: 'Io', category: 'rockets',
        status: 'Completado', tagline: 'Dos lanzamientos exitosos para validar sistemas de paracaídas',
        description: 'Io completó dos lanzamientos exitosos consecutivos, consolidando la capacidad del equipo en sistemas de recuperación por paracaídas. Cada vuelo proporcionó datos valiosos para el diseño iterativo del sistema de recuperación.',
        specs: { propulsion: 'Sólida', launches: '2 exitosos', mission: 'Parachute system validation' },
        image: null
      },
      {
        id: 'ganimedes', name: 'Ganimedes', category: 'rockets',
        status: 'Completado', tagline: 'Pruebas del sistema de despliegue de paracaídas',
        description: 'Ganimedes fue diseñado para probar el mecanismo de despliegue del paracaídas. El proyecto se centró en validar la secuencia de apertura y la integridad estructural del sistema de recuperación durante el vuelo.',
        specs: { propulsion: 'Sólida', mission: 'Parachute deployment system test' },
        image: null
      },
      {
        id: 'arima', name: 'Arima', category: 'rockets',
        status: 'Completado', tagline: 'Tercer cohete del equipo — fabricación integral interna',
        description: 'Arima fue el tercer cohete desarrollado por BiSKY Team. Todos los elementos fueron fabricados por el equipo excepto el motor, representando un paso importante hacia la autonomía completa en el diseño y producción de cohetes.',
        specs: { propulsion: 'Sólida (motor externo)', mission: 'Full in-house manufacturing except motor' },
        image: null
      },
      {
        id: 'bravo', name: 'Bravo', category: 'rockets',
        status: 'Completado', tagline: 'Segundo cohete diseñado, fabricado y lanzado por el equipo',
        description: 'Bravo fue el segundo cohete completamente diseñado, fabricado y lanzado por BiSKY Team. Consolidó las capacidades de diseño e integración del equipo y proporcionó experiencia valiosa para cohetes posteriores.',
        specs: { propulsion: 'Sólida', mission: 'Complete design-to-launch cycle' },
        image: null
      }
    ],
    engines: [
      {
        id: 'm3', name: 'M3', category: 'engines',
        status: 'En desarrollo', tagline: 'Primer motor híbrido integrado en un cohete del equipo',
        description: 'M3 será el primer motor híbrido completamente diseñado por el equipo que se integrará en un cohete propio. Representa la culminación de años de investigación en propulsión híbrida y un paso decisivo hacia el objetivo de los 100 km.',
        specs: { type: 'Híbrido', status: 'En desarrollo' },
        image: null
      },
      {
        id: 'm2', name: 'M2', category: 'engines',
        status: 'Completado', tagline: 'Segunda iteración del motor híbrido del equipo',
        description: 'M2 es la segunda iteración completamente diseñada por el equipo de los motores híbridos. Incorpora mejoras significativas basadas en los aprendizajes del M1 y M1.5, con un diseño optimizado de la cámara de combustión y sistema de inyección.',
        specs: { type: 'Híbrido', iteration: '2ª generación' },
        image: null
      },
      {
        id: 'm1-5', name: 'M1.5', category: 'engines',
        status: 'Completado', tagline: 'Versión mejorada del M1 con capacidad de ignición',
        description: 'M1.5 representó una mejora evolutiva del M1 con la adición de capacidad de ignición. Esta iteración permitió validar el proceso de encendido del motor híbrido, un paso crítico para la operación autónoma del sistema propulsivo.',
        specs: { type: 'Híbrido', improvement: 'Ignition capability' },
        image: null
      },
      {
        id: 'm1', name: 'M1', category: 'engines',
        status: 'Completado', tagline: 'Primer motor híbrido diseñado por el equipo — primero universitario en España',
        description: 'M1 fue el primer motor híbrido diseñado por BiSKY Team y el primer motor híbrido de desarrollo estudiantil disparado en España. Un hito histórico para la cohetería universitaria española que demostró la viabilidad de la tecnología híbrida en un entorno universitario.',
        specs: { type: 'Híbrido', milestone: 'First student-developed hybrid engine fired in Spain' },
        image: null
      }
    ],
    infrastructures: [
      {
        id: 'launch-rail', name: 'Launch Rail', category: 'infrastructures',
        status: 'Completado', tagline: 'Estructura de guiado para la fase inicial de despegue',
        description: 'El Launch Rail es la estructura que guía al cohete durante la primera fase del despegue. Diseñado y fabricado por el equipo, proporciona la estabilidad direccional necesaria hasta que el cohete alcanza velocidad suficiente para que las aletas aerodinámicas sean efectivas.',
        specs: { function: 'Launch guidance', design: 'Modular' },
        image: null
      },
      {
        id: 'galileo', name: 'Galileo', category: 'infrastructures',
        status: 'En desarrollo', tagline: 'Estructura auxiliar modular para lanzamientos',
        description: 'Galileo es una estructura auxiliar modular diseñada para complementar las operaciones de lanzamiento del equipo. Su diseño modular permite adaptarse a diferentes configuraciones de cohete y condiciones de campo.',
        specs: { type: 'Modular auxiliary structure' },
        image: null
      },
      {
        id: 'contenedor-m2', name: 'Contenedor M2', category: 'infrastructures',
        status: 'Completado', tagline: 'Instalación para ensayos de motores más rápidos y organizados',
        description: 'El Contenedor M2 es una instalación dedicada que permite realizar ensayos de disparo de motores de forma más rápida y organizada. Proporciona un entorno controlado y seguro para la caracterización de motores híbridos.',
        specs: { function: 'Engine test facility' },
        image: null
      }
    ],
    rd: [
      {
        id: 'orion', name: 'Orion', category: 'rd',
        status: 'Activo', tagline: 'Mantenimiento y desarrollo periódico de aviónica',
        description: 'Orion es el programa de mantenimiento y desarrollo continuo de los sistemas de aviónica del equipo. Su objetivo es reducir costes mediante la implementación de nuevos chips y componentes, manteniendo y mejorando las capacidades electrónicas de vuelo.',
        specs: { focus: 'Avionics maintenance & cost reduction', type: 'Ongoing R&D' },
        image: null
      },
      {
        id: 'carbon-fiber-tank', name: 'Carbon Fiber Tank', category: 'rd',
        status: 'En desarrollo', tagline: 'Tanques COPV de fibra de carbono para reducción de peso',
        description: 'El proyecto Carbon Fiber Tank busca la reducción de peso de los cohetes híbridos sustituyendo los tanques de acero por tanques COPV (Composite Overwrapped Pressure Vessel) de fibra de carbono. Esta optimización es clave para maximizar la altitud alcanzable.',
        specs: { focus: 'Weight reduction', technology: 'COPV — Carbon fiber composite', application: 'Hybrid engine tanks' },
        image: null
      }
    ]
  },

  sponsors: {
    tiers: [
      { id: 'cosmos', name: 'Cosmos', order: 1 },
      { id: 'galaxy', name: 'Galaxy', order: 2 },
      { id: 'nebula', name: 'Nebula', order: 3 },
      { id: 'star', name: 'Star', order: 4 },
      { id: 'satellite', name: 'Satellite', order: 5 },
      { id: 'earth', name: 'Earth', order: 6 },
      { id: 'software', name: 'Software', order: 7 }
    ],
    list: [
      { id: 1, name: 'Diputación Foral de Bizkaia', tier: 'cosmos', website: '#', description: 'Institución foral que apoya el desarrollo tecnológico y la investigación universitaria en Bizkaia.' },
      { id: 2, name: 'Bufete Mas y Calvet', tier: 'galaxy', website: '#', description: 'Asesoramiento jurídico para el equipo.' },
      { id: 3, name: 'Harmonic Drive', tier: 'galaxy', website: '#', description: 'Fabricante de componentes mecánicos de precisión.' },
      { id: 4, name: 'IDOM', tier: 'galaxy', website: '#', description: 'Consultoría profesional de ingeniería, arquitectura y consultoría.' },
      { id: 5, name: 'Satlantis', tier: 'galaxy', website: '#', description: 'Empresa de tecnología espacial especializada en instrumentos ópticos para satélites.' },
      { id: 6, name: 'Sener', tier: 'galaxy', website: '#', description: 'Grupo de ingeniería y tecnología con división aeroespacial.' },
      { id: 7, name: 'Ayuntamiento de Bilbao', tier: 'nebula', website: '#', description: 'Apoyo institucional del Ayuntamiento de Bilbao.' },
      { id: 8, name: 'Compoxi', tier: 'nebula', website: '#', description: 'Especialistas en materiales compuestos y fibra de carbono.' },
      { id: 9, name: 'Gedore', tier: 'nebula', website: '#', description: 'Fabricante de herramientas industriales de alta calidad.' },
      { id: 10, name: 'Tecnalia', tier: 'nebula', website: '#', description: 'Centro de investigación y desarrollo tecnológico.' },
      { id: 11, name: 'CADTECH', tier: 'star', website: '#', description: 'Soluciones de diseño CAD avanzadas.' },
      { id: 12, name: 'CFAA', tier: 'star', website: '#', description: 'Centro de Fabricación Avanzada Aeronáutica.' },
      { id: 13, name: 'CTA', tier: 'star', website: '#', description: 'Corporación Tecnológica de Andalucía.' },
      { id: 14, name: 'MADIT Metal', tier: 'star', website: '#', description: 'Fabricación e impresión 3D en metal.' },
      { id: 15, name: 'SUGATSUNE', tier: 'star', website: '#', description: 'Componentes y herrajes industriales.' },
      { id: 16, name: 'Eurocircuits', tier: 'star', website: '#', description: 'Fabricación de PCBs de alta calidad bajo demanda.' },
      { id: 17, name: 'IZAR', tier: 'star', website: '#', description: 'Fabricante de herramientas de corte y mecanizado.' },
      { id: 18, name: 'NORELEM', tier: 'star', website: '#', description: 'Componentes estándar para ingeniería mecánica.' },
      { id: 19, name: 'OWASYS', tier: 'star', website: '#', description: 'Soluciones IoT y electrónica embebida.' },
      { id: 20, name: 'CIFP Iurreta LHII', tier: 'earth', website: '#', description: 'Centro de formación profesional — colaboración educativa.' },
      { id: 21, name: 'INEKO', tier: 'earth', website: '#', description: 'Consultoría y servicios empresariales.' },
      { id: 22, name: 'SAMTEC', tier: 'earth', website: '#', description: 'Conectores electrónicos de alta velocidad.' },
      { id: 23, name: 'SAMYLABS', tier: 'earth', website: '#', description: 'Laboratorio de innovación y prototipado.' },
      { id: 24, name: 'Altium', tier: 'software', website: '#', description: 'Herramienta profesional de diseño de PCBs.' },
      { id: 25, name: 'Dassault Systèmes', tier: 'software', website: '#', description: 'Suite de software 3D — SOLIDWORKS, CATIA, SIMULIA.' }
    ]
  },

  // ————————————————————
  // HELPER METHODS
  // ————————————————————

  getAllProjects() {
    return [
      ...this.projects.rockets,
      ...this.projects.engines,
      ...this.projects.infrastructures,
      ...this.projects.rd
    ];
  },

  getProjectById(id) {
    return this.getAllProjects().find(p => p.id === id);
  },

  getYearData(yearKey) {
    return this.membersByYear[yearKey] || null;
  },

  getMemberPhoto(name, basePath) {
    // basePath should be the path prefix to the images folder
    const filename = this.memberPhotos[name];
    if (!filename) return null;
    return `${basePath}${encodeURIComponent(filename)}`;
  },

  /** Count all unique members in a given year */
  countMembersInYear(yearKey) {
    const data = this.membersByYear[yearKey];
    if (!data) return 0;
    const names = new Set();
    if (data.faculty) data.faculty.forEach(m => names.add(m.name));
    if (data.leadership) data.leadership.forEach(m => names.add(m.name));
    if (data.projectManagers) data.projectManagers.forEach(m => names.add(m.name));
    if (data.departments) {
      Object.values(data.departments).forEach(dept => {
        if (dept.chief) names.add(dept.chief);
        if (dept.members) dept.members.forEach(n => names.add(n));
      });
    }
    return names.size;
  },

  getSponsorsByTier(tierId) {
    return this.sponsors.list.filter(s => s.tier === tierId);
  },

  getPositionName(posId) {
    const pos = this.positions.find(p => p.id === posId);
    return pos ? pos.name : posId;
  },

  getCategoryLabel(cat) {
    const labels = {
      'rockets': 'Rockets',
      'engines': 'Engines',
      'infrastructures': 'Infrastructures',
      'rd': 'R&D'
    };
    return labels[cat] || cat;
  },

  getCategoryIcon(cat) {
    const icons = {
      'rockets': '🚀',
      'engines': '⊘',
      'infrastructures': '⊞',
      'rd': '◎'
    };
    return icons[cat] || '◇';
  },

  getStatusClass(status) {
    if (status === 'Completado') return 'status--completed';
    if (status === 'En desarrollo') return 'status--active';
    if (status === 'Activo') return 'status--active';
    return 'status--planned';
  },

  /** Generate a slug-safe ID from a member name */
  memberSlug(name) {
    return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
};
