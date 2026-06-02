import os
import pathlib
import sys

def rename_files():
    # Target the current directory
    directory = pathlib.Path('.')
    
    # Sort files to maintain a consistent processing order
    files = sorted(list(directory.glob('*.png')))
    
    if not files:
        print("No .png files found.")
        return

    for path in files:
        if not path.is_file():
            continue
            
        try:
            stat_info = path.stat()
            # st_birthtime is available on macOS and some Linux filesystems
            # Fallback to st_mtime (modification time) if birthtime is 0 or unavailable
            timestamp = getattr(stat_info, 'st_birthtime', None)
            if timestamp is None or timestamp == 0:
                timestamp = stat_info.st_mtime
            
            # Format to 3 decimal places (milliseconds)
            new_name = f"{timestamp:.3f}.png"
            new_path = path.with_name(new_name)
            
            # Avoid overwriting and name collisions
            counter = 1
            original_new_path = new_path
            while new_path.exists():
                if new_path.resolve() == path.resolve():
                    break
                new_name = f"{timestamp:.3f}({counter}).png"
                new_path = path.with_name(new_name)
                counter += 1
            
            if new_path.resolve() != path.resolve():
                print(f"Renaming: {path.name} -> {new_path.name}")
                path.rename(new_path)
            else:
                print(f"Skipping: {path.name} (already correctly named)")
                
        except Exception as e:
            print(f"Error processing {path.name}: {e}", file=sys.stderr)

if __name__ == "__main__":
    rename_files()
