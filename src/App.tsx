import { useState } from 'react'
import './App.css'

type Task = { title: string; project: string; color: string; done?: boolean }

const initialTasks: Task[] = [
  { title: 'Polish the onboarding flow', project: 'Website refresh', color: 'violet' },
  { title: 'Review the API documentation', project: 'Developer portal', color: 'blue' },
  { title: 'Share the launch checklist', project: 'Product launch', color: 'orange' },
]

function App() {
  const [tasks, setTasks] = useState(initialTasks)
  const [activeNav, setActiveNav] = useState('Overview')
  const completed = tasks.filter((task) => task.done).length

  function addTask() {
    setTasks((current) => [...current, { title: 'Explore the T3 Code workflow', project: 'T3 demo', color: 'violet' }])
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#overview" aria-label="T3 home"><span className="brand-mark">✳</span><span>t3<span className="brand-light">code</span></span></a>
        <div className="workspace-switcher"><span className="workspace-avatar">J</span><span><strong>Julian’s workspace</strong><small>Free plan</small></span><span className="chevron">⌄</span></div>
        <p className="nav-label">WORKSPACE</p>
        <nav aria-label="Main navigation">
          {['Overview', 'My tasks', 'Projects', 'Inbox'].map((item, index) => <button key={item} className={`nav-item ${activeNav === item ? 'selected' : ''}`} onClick={() => setActiveNav(item)}><span className="nav-icon">{['◫', '☑', '▦', '✉'][index]}</span>{item}{item === 'Inbox' && <span className="nav-count">3</span>}</button>)}
        </nav>
        <div className="sidebar-bottom"><div className="help-card"><span className="help-icon">✦</span><strong>Make something great</strong><p>Your next idea is one prompt away.</p><button onClick={addTask}>Try a new task <span>↗</span></button></div><button className="profile"><span className="profile-avatar">JI</span><span><strong>Julian I.</strong><small>Personal account</small></span><span className="chevron">···</span></button></div>
      </aside>

      <main className="main-content">
        <header className="topbar"><div className="breadcrumbs"><span>Workspace</span><span className="slash">/</span><strong>{activeNav}</strong></div><div className="top-actions"><button className="icon-button" aria-label="Search">⌕</button><button className="icon-button notification" aria-label="Notifications">♧<i /></button><span className="top-avatar">JI</span></div></header>
        <div className="content-wrap">
          <div className="welcome-row"><div><p className="eyebrow">MONDAY, NOVEMBER 3, 2026</p><h1>Good morning, Julian <span className="wave">✳</span></h1><p className="subtitle">A little progress goes a long way. Here’s your day at a glance.</p></div><button className="primary-button" onClick={addTask}><span>＋</span> New task</button></div>

          <section className="hero-card"><div className="hero-copy"><span className="pill"><span className="sparkle">✦</span> YOUR AI WORKSPACE</span><h2>Big ideas, meet<br />your new sidekick.</h2><p>Plan, build, and ship your best work with a little help from AI.</p><button className="hero-button" onClick={addTask}>Start something new <span>→</span></button></div><div className="hero-art" aria-hidden="true"><div className="orb orb-one"/><div className="orb orb-two"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="art-card"><span className="art-spark">✳</span><span className="art-line line-one"/><span className="art-line line-two"/><span className="art-line line-three"/><div className="art-check">✓</div></div><span className="floating-star star-one">✦</span><span className="floating-star star-two">✧</span></div></section>

          <section className="stats-grid" aria-label="Workspace summary"><article className="stat-card"><div className="stat-heading"><span>Tasks in progress</span><span className="stat-icon purple">◷</span></div><strong>{tasks.length - completed}</strong><div className="stat-foot"><span className="trend">↗ 12%</span> vs. last week</div></article><article className="stat-card"><div className="stat-heading"><span>Completed this week</span><span className="stat-icon green">✓</span></div><strong>{completed + 8}</strong><div className="stat-foot"><span className="trend">↗ 8%</span> vs. last week</div></article><article className="stat-card"><div className="stat-heading"><span>Active projects</span><span className="stat-icon orange">▦</span></div><strong>4</strong><div className="stat-foot">Across your workspace</div></article></section>

          <section className="lower-grid"><article className="panel tasks-panel"><div className="panel-header"><div><h3>Today’s focus</h3><p>A short list for a big day</p></div><button className="text-button" onClick={() => setActiveNav('My tasks')}>View all <span>→</span></button></div><div className="task-list">{tasks.slice(0, 5).map((task, index) => <label className={`task-row ${task.done ? 'task-done' : ''}`} key={`${task.title}-${index}`}><input type="checkbox" checked={!!task.done} onChange={() => setTasks((current) => current.map((item, taskIndex) => taskIndex === index ? { ...item, done: !item.done } : item))} /><span className="task-copy"><strong>{task.title}</strong><small><i className={`project-dot ${task.color}`} />{task.project}</small></span><span className="task-date">{index === 0 ? '10:30 AM' : index === 1 ? '1:00 PM' : '3:30 PM'}</span></label>)}</div><button className="add-task" onClick={addTask}><span>＋</span> Add a task</button></article><article className="panel activity-panel"><div className="panel-header"><div><h3>Recent activity</h3><p>What’s happening around you</p></div><button className="more-button" aria-label="More activity options">···</button></div><div className="activity-list"><div className="activity-row"><span className="activity-avatar avatar-purple">S</span><p><strong>Sam</strong> completed <b>Homepage wireframes</b><small>12 minutes ago</small></p></div><div className="activity-row"><span className="activity-avatar avatar-orange">M</span><p><strong>Morgan</strong> shared a project update<small>1 hour ago</small></p></div><div className="activity-row"><span className="activity-avatar avatar-blue">A</span><p><strong>Alex</strong> left a comment on <b>Launch plan</b><small>3 hours ago</small></p></div></div><div className="review-queue"><div className="review-heading"><span>Pull requests</span><span className="review-badge">2</span></div><a href="https://github.com/julian-i/t3-demo/pulls" target="_blank" rel="noreferrer"><span className="review-status" />Update onboarding flow <small>#12 · 2 files</small></a><a href="https://github.com/julian-i/t3-demo/pulls" target="_blank" rel="noreferrer"><span className="review-status waiting" />Add dashboard shortcuts <small>#9 · 4 files</small></a></div><button className="activity-link" onClick={() => setActiveNav('Inbox')}>See all activity <span>→</span></button></article></section>
          <footer>Made for curious minds <span>✳</span><span className="footer-right">Your workspace, your pace.</span></footer>
        </div>
      </main>
    </div>
  )
}

export default App

