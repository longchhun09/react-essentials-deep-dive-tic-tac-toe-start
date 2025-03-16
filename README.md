# ReactJs Essential App

## Purpose

- Learning to two-way binding
- Re-usable components Players, Gameboard
- Deriving a prop state and reduce state management in game board
- Learning to avoid conflict prop state and lift state to App.jsx as it communicate between player and gameboard

# Start a project

npm run build
## Key Learnings

1. **State Management**
   - Implemented two-way data binding between components
   - Lifted state up to App.jsx to manage game state centrally
   - Used derived state to calculate active player instead of storing directly

2. **Component Architecture**
   - Created reusable components (Player, GameBoard, GameOver)
   - Proper component communication through props
   - Clean separation of concerns between components

3. **React Concepts**
   - useState hook for managing game turns and player state
   - Props drilling and state lifting
   - Conditional rendering for game over scenarios
   - Event handling for player moves and game restart

4. **Game Logic**
   - Implemented win detection using winning combinations
   - Managed game board state updates
   - Handle draw conditions
   - Turn-based player switching

## Project Structure

- `App.jsx` - Main game logic and state management
- `components/`
  - `GameBoard.jsx` - Renders the game grid
  - `Player.jsx` - Player information display
  - `GameOver.jsx` - Game end state handling
  - `Log.jsx` - Game moves history

## Running the Project
