// Основной модуль
import gulp from "gulp";
 
// Импорт путей
import { path } from "./gulp/config/path.js";

// Передаём значентя в глобальную переменную
global.app = {
    path: path,
    gulp: gulp
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";

// Наблюдатель за изменениями в файлах
function watcher () {
    gulp.watch(path.watch.files, copy)
}

// Построение сценариев выполнения задач
const dev = gulp.series(reset, copy, watcher);


// Выполнение сценария по умолчанию
gulp.task('default', dev );
