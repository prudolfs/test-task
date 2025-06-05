import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

window.PointerEvent = MouseEvent as typeof PointerEvent;

// Runs a cleanup after each test case
afterEach(() => {
  cleanup()
})
