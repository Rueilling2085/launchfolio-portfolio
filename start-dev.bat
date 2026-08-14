@echo off
cd /d "%~dp0"
:loop
call npm run dev -- -p 3002
timeout /t 3 /nobreak >nul
goto loop
