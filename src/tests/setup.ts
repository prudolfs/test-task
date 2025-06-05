import { vi, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

function createMockPointerEvent(
  type: string,
  props: PointerEventInit = {},
): PointerEvent {
  const event = new Event(type, props) as PointerEvent
  Object.assign(event, {
    button: props.button ?? 0,
    ctrlKey: props.ctrlKey ?? false,
    pointerType: props.pointerType ?? 'mouse',
  })
  return event
}

window.PointerEvent = createMockPointerEvent as any

Object.assign(window.HTMLElement.prototype, {
  scrollIntoView: vi.fn(),
  releasePointerCapture: vi.fn(),
  hasPointerCapture: vi.fn(),
})

// Runs a cleanup after each test case
afterEach(() => {
  cleanup()
})
