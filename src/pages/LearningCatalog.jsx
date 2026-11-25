import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const courses = [
  { id: 'c1', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85', title: 'Social Entrepreneurship & Impact Design', category: 'Entrepreneurship', level: 'Beginner', duration: '4 weeks', hours: 16, lessons: 8, description: 'Learn to identify community challenges, design sustainable solutions and communicate social impact.', tags: ['Social impact', 'Design thinking', 'Business model'], icon: '✳', tone: 'mint' },
  { id: 'c2', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85', title: 'Youth Leadership & Team Collaboration', category: 'Leadership', level: 'Beginner', duration: '3 weeks', hours: 12, lessons: 7, description: 'Build practical leadership habits, communication skills and confidence to work with diverse teams.', tags: ['Leadership', 'Teamwork', 'Communication'], icon: '✦', tone: 'lavender' },
  { id: 'c3', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85', title: 'Digital Skills for the Modern Workplace', category: 'Technology', level: 'Beginner', duration: '5 weeks', hours: 20, lessons: 10, description: 'Strengthen digital productivity, online collaboration and responsible technology skills.', tags: ['Digital literacy', 'Productivity', 'Technology'], icon: '⌘', tone: 'blue' },
  { id: 'c4', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=85', title: 'Career Readiness & Professional Communication', category: 'Career Development', level: 'Intermediate', duration: '2 weeks', hours: 10, lessons: 6, description: 'Practise CV writing, interview preparation, workplace communication and career planning.', tags: ['Career', 'CV', 'Interview'], icon: '↗', tone: 'peach' },
  { id: 'c5', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85', title: 'Community Research & Project Planning', category: 'Community Engagement', level: 'Intermediate', duration: '4 weeks', hours: 18, lessons: 9, description: 'Explore community needs assessment, stakeholder mapping and project planning fundamentals.', tags: ['Research', 'Community', 'Project planning'], icon: '◎', tone: 'yellow' },
  { id: 'c6', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85', title: 'Innovation, Problem Solving & Prototyping', category: 'Innovation', level: 'Advanced', duration: '3 weeks', hours: 15, lessons: 8, description: 'Move from an identified problem to an early prototype through structured experimentation.', tags: ['Innovation', 'Prototyping', 'Problem solving'], icon: '⌁', tone: 'rose' },
  { id: 'c7', image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=85', title: 'Presentation & Public Speaking Essentials', category: 'Communication', level: 'Beginner', duration: '2 weeks', hours: 8, lessons: 5, description: 'Organise ideas, prepare clear presentations and practise speaking with confidence.', tags: ['Speaking', 'Presentation', 'Confidence'], icon: '◌', tone: 'mint' },
  { id: 'c8', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=85', title: 'Project Monitoring & Impact Measurement', category: 'Leadership', level: 'Advanced', duration: '4 weeks', hours: 16, lessons: 8, description: 'Understand goals, indicators, learning loops and basic approaches to measuring project progress.', tags: ['Monitoring', 'Evaluation', 'Impact'], icon: '⌖', tone: 'blue' },
];

const categories = ['All', ...new Set(courses.map((course) => course.category))];

export default function LearningCatalog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [level, setLevel] = useState('All');
  const [duration, setDuration] = useState('All');
  const [sort, setSort] = useState('Recommended');
  const [saved, setSaved] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [view, setView] = useState('explore');
  const [dark, setDark] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const visibleCourses = useMemo(() => {
    let result = courses.filter((course) => {
      const matchesQuery = `${course.title} ${course.description} ${course.category} ${course.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === 'All' || course.category === category;
      const matchesLevel = level === 'All' || course.level === level;
      const matchesDuration = duration === 'All' || (duration === 'Short' ? course.hours <= 12 : duration === 'Medium' ? course.hours > 12 && course.hours <= 16 : course.hours > 16);
      const matchesView = view === 'saved' ? saved.includes(course.id) : view === 'enrolled' ? enrolled.includes(course.id) : true;
      return matchesQuery && matchesCategory && matchesLevel && matchesDuration && matchesView;
    });
    if (sort === 'Name A–Z') result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    if (sort === 'Shortest first') result = [...result].sort((a, b) => a.hours - b.hours);
    if (sort === 'Longest first') result = [...result].sort((a, b) => b.hours - a.hours);
    return result;
  }, [query, category, level, duration, sort, view, saved, enrolled]);

  const totalHours = courses.reduce((sum, course) => sum + course.hours, 0);
  const toggleItem = (id, collection, setter) => setter(collection.includes(id) ? collection.filter((item) => item !== id) : [...collection, id]);

  return (
    <div className={dark ? 'catalog-page catalog-dark' : 'catalog-page'}>
      <div className="catalog-shell">
        <header className="catalog-header">
          <Link to="/learning-catalog" className="catalog-brand" aria-label="Learning catalog home">
            <span className="catalog-brand-mark">YS</span>
            <span><small>YSSE • LEARN & GROW</small><strong>Learning Catalog</strong></span>
          </Link>
          <nav className="catalog-tabs" aria-label="Catalog views">
            <button className={view === 'explore' ? 'selected' : ''} onClick={() => setView('explore')}>Explore courses</button>
            <button className={view === 'saved' ? 'selected' : ''} onClick={() => setView('saved')}>Saved courses</button>
            <button className={view === 'enrolled' ? 'selected' : ''} onClick={() => setView('enrolled')}>My learning</button>
            <Link to="/">YSSE Home</Link>
          </nav>
          <div className="catalog-actions">
            <button className="catalog-soft-button" onClick={() => setDark(!dark)}>{dark ? 'Light mode' : 'Dark mode'}</button>
            <span className="catalog-count">Saved ({saved.length})</span>
            <span className="catalog-count enrolled-count">Enrolled ({enrolled.length})</span>
          </div>
        </header>

        <section className="catalog-hero">
          <div className="catalog-hero-copy">
            <span className="catalog-kicker">YSSE LEARNING • SAMPLE CATALOG</span>
            <h1>Design your next <em>learning journey.</em></h1>
            <p>Explore practical learning pathways in leadership, entrepreneurship, communication and innovation. Find a topic, build a skill and take your next step.</p>
            <div className="catalog-stats">
              <div><strong>{courses.length}</strong><span>LEARNING PATHWAYS</span></div>
              <div><strong>{categories.length - 1}</strong><span>TOPIC AREAS</span></div>
              <div><strong>{totalHours}h</strong><span>ESTIMATED LEARNING</span></div>
            </div>
          </div>
          <div className="catalog-feature-art">
            <div className="catalog-art-orbit orbit-a"></div><div className="catalog-art-orbit orbit-b"></div>
            <span className="catalog-art-sticker">LEARN<br/>BY DOING</span>
            <div className="catalog-art-caption"><small>01 / POSSIBILITY</small><strong>Small steps.<br/>New possibilities.</strong><span>Explore a skill today.</span></div>
          </div>
        </section>

        <section className="catalog-controls" aria-label="Course filters">
          <div className="catalog-search-row">
            <label className="catalog-search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search courses, skills or topics..." aria-label="Search courses"/></label>
            <label className="catalog-select"><span>DURATION</span><select value={duration} onChange={(e) => setDuration(e.target.value)}><option value="All">Any duration</option><option value="Short">Up to 12 hours</option><option value="Medium">13–16 hours</option><option value="Long">More than 16 hours</option></select></label>
            <label className="catalog-select"><span>DIFFICULTY</span><select value={level} onChange={(e) => setLevel(e.target.value)}><option>All</option><option>Beginner</option><option>Intermediate</option><option>Advanced</option></select></label>
            <label className="catalog-select"><span>SORT BY</span><select value={sort} onChange={(e) => setSort(e.target.value)}><option>Recommended</option><option>Name A–Z</option><option>Shortest first</option><option>Longest first</option></select></label>
          </div>
          <div className="catalog-filter-group"><strong>TOPIC AREAS</strong><div className="catalog-chips">{categories.map((item) => <button key={item} className={category === item ? 'active' : ''} onClick={() => setCategory(item)}>{item}</button>)}</div></div>
        </section>

        <section className="catalog-results">
          <div className="catalog-results-heading"><div><span className="catalog-kicker">CURATED LEARNING</span><h2>{view === 'saved' ? 'Your saved courses' : view === 'enrolled' ? 'Your learning list' : 'Explore learning pathways'}</h2></div><span>{visibleCourses.length} {visibleCourses.length === 1 ? 'course' : 'courses'} shown</span></div>
          {visibleCourses.length ? <div className="catalog-course-grid">{visibleCourses.map((course) => <article className="catalog-course-card" key={course.id}>
            <div className={`catalog-course-art ${course.tone}`}><img src={course.image} alt={course.title} loading="lazy"/><span className="catalog-course-image-overlay"/><small>{course.category}</small></div>
            <div className="catalog-course-body">
              <div className="catalog-course-meta"><span className="catalog-level">{course.level}</span><button className={saved.includes(course.id) ? 'save-course saved' : 'save-course'} onClick={() => toggleItem(course.id, saved, setSaved)} aria-label={saved.includes(course.id) ? 'Remove saved course' : 'Save course'}>{saved.includes(course.id) ? '♥ Saved' : '♡ Save'}</button></div>
              <h3>{course.title}</h3><p>{course.description}</p>
              <div className="catalog-course-facts"><span>{course.hours}h estimated</span><span>{course.lessons} learning units</span><span>{course.duration}</span></div>
              <div className="catalog-course-tags">{course.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              {expanded === course.id && <div className="catalog-course-detail"><strong>What you will explore</strong><p>{course.description} This is illustrative learning content for the Week 7 portal demonstration.</p></div>}
              <div className="catalog-course-buttons"><button className="catalog-details-button" onClick={() => setExpanded(expanded === course.id ? null : course.id)}>{expanded === course.id ? 'Hide details' : 'View course details'}</button><button className="catalog-enroll-button" onClick={() => toggleItem(course.id, enrolled, setEnrolled)}>{enrolled.includes(course.id) ? 'Added to my learning ✓' : 'Add to my learning'}</button></div>
            </div>
          </article>)}</div> : <div className="catalog-empty"><strong>{view === 'saved' ? 'No saved courses yet' : view === 'enrolled' ? 'Your learning list is empty' : 'No matching courses found'}</strong><p>Try another search or adjust the filters to explore more learning pathways.</p><button onClick={() => {setQuery('');setCategory('All');setLevel('All');setDuration('All');setView('explore');}}>Reset filters</button></div>}
          <p className="catalog-disclaimer">Learning pathways, durations and lesson counts are illustrative sample content created for this student assignment. They are not confirmed YSSE courses or official enrolment opportunities.</p>
        </section>
      </div>
    </div>
  );
}
